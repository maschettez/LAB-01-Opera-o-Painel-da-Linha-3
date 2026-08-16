# Respostas do LAB 01

Nome: Gustavo Maschette 
Matricula: 
Dupla (M2 em diante):

---

## M2 - Quem quebrou o painel

**Hash curto do commit que introduziu o erro:** 
01ef93b

**Autor:** 
Tarcisio Melo <tarcisio.melo@techinova.com.br>

**Data:**
15/06/2026 22:38:00 (-0300)

**Linha alterada (antes e depois):**
Refatora a funcao de conversao para simplificar a expressao


---

## M3 - O segredo vazado

**O que voce esperava ver no `git status` e o que apareceu:**

**Depois do push, alguem que clonar o repositorio ainda consegue ler a chave?
Responda em duas linhas, explicando o motivo:
** Eu esperava que o arquivo `config/credenciais.env` fosse ignorado assim que fosse adicionado ao `.gitignore`.
No `git status`, ele continuou aparecendo porque já estava sendo rastreado pelo Git, então foi necessário usar `git rm --cached` para remover o arquivo do índice sem apagá-lo do computador.

**Depois do push, alguem que clonar o repositorio ainda consegue ler a chave?**

Sim. A chave ainda pode ser encontrada nos commits antigos do histórico do repositório.
O `.gitignore` impede apenas que novas versões do arquivo sejam rastreadas, mas não remove o conteúdo dos commits anteriores.

---

## M4 - Colisao

**O que significavam os marcadores que apareceram dentro do arquivo:**

- `<<<<<<<` :
- `=======` :
- `>>>>>>>` :

**Qual pedaco veio de quem, e qual titulo voces decidiram manter:**

---

## Casa - Incidente na linha 3

**Hash do commit que quebrou o painel:**

**Hash do commit de revert:**

**Por que `git revert` e nao `git reset` neste caso:**
