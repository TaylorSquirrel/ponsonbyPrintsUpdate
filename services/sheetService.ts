
import { Order } from '../types';
import { SHEET_CSV_URL, STATUS_MAP } from '../constants';

// A simple but effective CSV parser that handles quoted fields.
function parseCSV(text: string): string[][] {
    const rows: string[][] = [];
    let currentRow: string[] = [];
    let currentField = '';
    let inQuotedField = false;

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        
        if (inQuotedField) {
            if (char === '"') {
                if (i + 1 < text.length && text[i + 1] === '"') {
                    currentField += '"';
                    i++; // Skip the second quote
                } else {
                    inQuotedField = false;
                }
            } else {
                currentField += char;
            }
        } else {
            if (char === '"') {
                inQuotedField = true;
            } else if (char === ',') {
                currentRow.push(currentField.trim());
                currentField = '';
            } else if (char === '\n' || char === '\r') {
                if (i > 0 && text[i-1] !== '\n' && text[i-1] !== '\r') {
                    currentRow.push(currentField.trim());
                    rows.push(currentRow);
                    currentRow = [];
                    currentField = '';
                }
                 if (char === '\r' && i + 1 < text.length && text[i + 1] === '\n') {
                    i++; // Handle CRLF
                }
            } else {
                currentField += char;
            }
        }
    }
    
    if (currentField || currentRow.length > 0) {
        currentRow.push(currentField.trim());
        rows.push(currentRow);
    }
    
    return rows.filter(row => row.length > 0 && row.some(field => field));
}


export const fetchOrders = async (): Promise<Order[]> => {
    const response = await fetch(SHEET_CSV_URL);
    if (!response.ok) {
        throw new Error('Failed to fetch data from Google Sheet.');
    }
    const csvText = await response.text();
    const rows = parseCSV(csvText);

    if (rows.length < 2) {
        return []; // No data rows
    }

    const header = rows[0].map(h => h.trim());
    const nameColIndex = header.findIndex(col => col === "Name");
    
    // Find the last column named "ID" to match the original script's logic
    let idColIndex = -1;
    for (let i = header.length - 1; i >= 0; i--) {
        if (header[i] === "ID") {
            idColIndex = i;
            break;
        }
    }

    if (nameColIndex === -1 || idColIndex === -1) {
        throw new Error('Could not find required "Name" or "ID" columns in the spreadsheet.');
    }

    return rows.slice(1).map(row => {
        const name = row[nameColIndex] || 'N/A';
        const idRaw = row[idColIndex] || '';

        let status = 'Unknown';
        if (idRaw) {
            const match = /^(\d+)=/.exec(idRaw);
            const idKey = match ? match[1] : idRaw;
            status = STATUS_MAP[idKey] || 'Unknown';
        }

        return { name, status };
    }).filter(order => order.name.trim() !== '' && order.name.trim() !== 'N/A');
};
