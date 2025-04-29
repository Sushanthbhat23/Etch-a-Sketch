const container = document.getElementById('container');
        
        // Create 16 rows
        for (let i = 0; i < 16; i++) {
            const row = document.createElement('div');
            row.className = 'row';
            
            // Create 16 squares in each row
            for (let j = 0; j < 16; j++) {
                const square = document.createElement('div');
                square.className = 'square';
                row.appendChild(square);
            }
            
            container.appendChild(row);
        }