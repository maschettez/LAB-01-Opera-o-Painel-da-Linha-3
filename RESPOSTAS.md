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

```
Antes:
return (leitura - 32) * 5 / 9;

Depois:
return leitura * 9 / 5 + 32;

```

---

## M3 - O segredo vazado

**O que voce esperava ver no `git status` e o que apareceu:**

**Depois do push, alguem que clonar o repositorio ainda consegue ler a chave?
Responda em duas linhas, explicando o motivo:**

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
