document.addEventListener('DOMContentLoaded', function() {
    const createProductBtn = document.getElementById('createProduct');
    const getInfoBtn = document.getElementById('getInfo');
    const updateStatusBtn = document.getElementById('updateStatus');
    const clearTerminalBtn = document.getElementById('clearTerminal');
    const terminal = document.getElementById('terminal');
    const commandHistory = document.getElementById('commandHistory');
    
    const contractId = 'CDIUC5W5773TEXZMU2QIGIUHMIYY6QB4UKGKIWPSOFVEEMIRFZID2NDT';
    const sourceKey = 'supplychain-key';
    const manufacturerAddress = 'GCEN2T267FH7GLL5VF4ELDY4LE7GWWQJDCN6RUPX2RLEASBJFQPN34C6';
    
    // Lưu trữ sản phẩm đã tạo
    const products = new Map();
    
    // Hàm thêm dòng vào terminal
    function addTerminalLine(content, className = '') {
        const line = document.createElement('div');
        line.className = `terminal-line ${className}`;
        line.textContent = content;
        commandHistory.appendChild(line);
        terminal.scrollTop = terminal.scrollHeight;
    }
    
    // Hàm xóa terminal
    clearTerminalBtn.addEventListener('click', function() {
        commandHistory.innerHTML = '';
        addTerminalLine('SupplyChainDApp > Đã xóa kết quả', 'terminal-prompt');
    });
    
    // Xử lý tạo sản phẩm
    createProductBtn.addEventListener('click', function() {
        const productId = document.getElementById('productId').value;
        const productName = document.getElementById('productName').value;
        
        if (!productId || !productName) {
            alert('Vui lòng nhập đầy đủ thông tin sản phẩm!');
            return;
        }
        
        // Lưu sản phẩm vào bộ nhớ
        products.set(productId, {
            id: productId,
            name: productName,
            manufacturer: manufacturerAddress,
            current_owner: manufacturerAddress,
            status: 'created',
            created_at: new Date().toISOString()
        });
        
        // Hiển thị kết quả
        addTerminalLine(`✅ Đã tạo sản phẩm thành công:`, 'terminal-success');
        addTerminalLine(`"${productName}"`, 'terminal-result');
        
        // Reset form
        document.getElementById('productId').value = '';
        document.getElementById('productName').value = '';
    });
    
    // Xử lý lấy thông tin sản phẩm
    getInfoBtn.addEventListener('click', function() {
        const productId = document.getElementById('infoProductId').value;
        
        if (!productId) {
            alert('Vui lòng nhập mã sản phẩm!');
            return;
        }
        
        // Hiển thị kết quả
        const product = products.get(productId);
        
        if (product) {
            addTerminalLine(`📋 Thông tin sản phẩm ${productId}:`, 'terminal-success');
            const infoText = `Mã: ${product.id}
Tên: ${product.name}
Nhà sản xuất: ${product.manufacturer}
Chủ sở hữu: ${product.current_owner}
Trạng thái: ${product.status}
Ngày tạo: ${new Date(product.created_at).toLocaleString()}`;
            
            const infoDiv = document.createElement('div');
            infoDiv.className = 'product-info';
            infoDiv.textContent = infoText;
            commandHistory.appendChild(infoDiv);
        } else {
            addTerminalLine(`❌ Không tìm thấy sản phẩm với mã ${productId}`, 'terminal-result');
        }
        
        terminal.scrollTop = terminal.scrollHeight;
    });
    
    // Xử lý cập nhật trạng thái
    updateStatusBtn.addEventListener('click', function() {
        const productId = document.getElementById('statusProductId').value;
        const newStatus = document.getElementById('statusSelect').value;
        
        if (!productId) {
            alert('Vui lòng nhập mã sản phẩm!');
            return;
        }
        
        // Cập nhật trạng thái sản phẩm
        const product = products.get(productId);
        if (product) {
            const oldStatus = product.status;
            product.status = newStatus;
            
            addTerminalLine(`✅ Đã cập nhật trạng thái sản phẩm ${productId}:`, 'terminal-success');
            addTerminalLine(`"${oldStatus}" → "${newStatus}"`, 'terminal-result');
        } else {
            addTerminalLine(`❌ Không tìm thấy sản phẩm với mã ${productId}`, 'terminal-result');
        }
        
        // Reset form
        document.getElementById('statusProductId').value = '';
    });
    
    // Thêm ví dụ khi khởi động
    setTimeout(() => {
        addTerminalLine('💡 Gợi ý: Nhập thông tin sản phẩm và nhấn nút để thực hiện các thao tác', 'terminal-prompt');
    }, 1000);
});