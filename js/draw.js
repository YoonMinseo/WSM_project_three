
        const canvas = document.getElementById('myCanvas');
        const context = canvas.getContext('2d');
        let selectedColor = '#FF0000'; // 초기 선택 색상: 빨간색

        // 각 색상 선택 버튼의 id와 해당 색상 매핑
        const colorButtons = {
            colorButton1: '#FF0000', // 빨간색
            colorButton2: '#FFA500', // 주황색
            colorButton3: '#FFFF00', // 노란색
            colorButton4: '#008000', // 초록색
            colorButton5: '#0000FF', // 파란색
            colorButton6: '#000080', // 남색
            colorButton7: '#800080', // 보라색
            colorButton8: '#513906', //검정색
            colorButton9: '#513906', // 갈색
            colorButton10: '#73eefe', //민트색
            colorButton11: '#f388e8', //핑크색
            colorButton12: '#51061f'  //자주색

        };

        for (const buttonId in colorButtons) {
            const button = document.getElementById(buttonId);
            const color = colorButtons[buttonId];

            button.addEventListener('click', () => {
                selectedColor = color;
            });
        }

        canvas.addEventListener('mousedown', startDrawing);
        canvas.addEventListener('mouseup', stopDrawing);
        canvas.addEventListener('mousemove', draw);

        let isDrawing = false;

        function startDrawing(e) {
            isDrawing = true;
            draw(e);
        }

        function stopDrawing() {
            isDrawing = false;
            context.beginPath();
        }

        function draw(e) {
            if (!isDrawing) return;
            context.lineWidth = 5;
            context.lineCap = 'round';
            context.strokeStyle = selectedColor;
            context.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
            context.stroke();
            context.beginPath();
            context.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        }

    

        // "저장하기" 버튼 클릭 이벤트 처리
        const saveButton = document.getElementById('saveButton');
        saveButton.addEventListener('click', () => {
            // 캔버스 그림을 이미지로 저장하거나 다른 저장 작업을 수행
            // 여기에 저장 로직을 추가하세요.
        });

        // "삭제하기" 버튼 클릭 이벤트 처리
        const deleteButton = document.getElementById('deleteButton');
        deleteButton.addEventListener('click', () => {
            // 캔버스 내용을 지우거나 삭제 작업을 수행
            // 여기에 삭제 로직을 추가하세요.
        });
        document.getElementById('button222').addEventListener('click', function () {
        // "nutrition.html" 파일로 이동
        window.location.href = 'nutrition.html';
    });
    document.getElementById('saveButton').addEventListener('click', function() {
        alert('저장되었습니다!');
    });
