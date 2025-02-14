document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("result");
    let expression = "";

    // Conjunto de teclas permitidas
    const allowedKeys = new Set("0123456789+-*/.=EnterBackspaceEscape");

    // Função para atualizar o display
    function updateDisplay() {
        display.innerHTML = expression || "0";
    }

    // Captura cliques nos botões da calculadora
    document.querySelectorAll(".btn").forEach(button => {
        button.addEventListener("click", () => handleInput(button.innerHTML));
    });

    // Captura teclas do teclado numérico e do teclado principal
    document.addEventListener("keydown", (event) => {
        if (!allowedKeys.has(event.key)) return; // Ignora teclas não permitidas

        const keyMap = {
            "Enter": "=",
            "Backspace": "DEL",
            "Escape": "RESET",
            "*": "x" // Exibição do operador de multiplicação
        };

        handleInput(keyMap[event.key] || event.key);
    });

    // Função para processar entrada (teclado ou botão)
    function handleInput(value) {
        if (value === "RESET") {
            expression = "";
        } else if (value === "DEL") {
            expression = expression.slice(0, -1);
        } else if (value === "=") {
            try {
                let tempExpression = expression.replace("x", "*");

                // Verifica se há divisão por zero
                if (/\/0(?![.0-9])/.test(tempExpression)) {
                    expression = "Não pode dividir por Zero";
                } else {
                    let result = eval(tempExpression);
                    expression = isFinite(result) ? result : "Não pode dividir por Zero";
                }
            } catch {
                expression = "Erro";
            }
        } else {
            expression += value;
        }

        updateDisplay();
    }
});
