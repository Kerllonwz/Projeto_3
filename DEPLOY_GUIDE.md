# FitZone Academia - Guia de Deploy na Vercel

## 🚀 Opção 1: Deploy via Vercel CLI (Recomendado)

### Passo 1: Instalar Vercel CLI
Abra o terminal (PowerShell) e execute:
```bash
npm install -g vercel
```

### Passo 2: Fazer Login
```bash
vercel login
```
Siga as instruções para autenticar (pode ser via GitHub, email, etc.)

### Passo 3: Deploy
Navegue até a pasta do projeto e execute:
```bash
cd "c:\Users\EZ\Documents\Arquivos\.Trabalhos\Curso_EBAC\Front_end\13_Projeto_3"
vercel
```

Responda as perguntas:
- Set up and deploy? → **Y** (Yes)
- Which scope? → Escolha seu usuário
- Link to existing project? → **N** (No)
- What's your project's name? → **fitzone-academia** (ou outro nome)
- In which directory is your code located? → **./** (tecle Enter)

### Passo 4: Deploy de Produção
Para fazer deploy final:
```bash
vercel --prod
```

✅ Pronto! Você receberá uma URL como: `https://fitzone-academia.vercel.app`

---

## 🌐 Opção 2: Deploy via Interface Web (Mais Fácil)

### Passo 1: Criar Repositório no GitHub
1. Acesse [GitHub](https://github.com)
2. Clique em **New Repository**
3. Nome: `fitzone-landing-page`
4. Deixe público
5. Clique em **Create repository**

### Passo 2: Fazer Upload dos Arquivos
No PowerShell, navegue até a pasta:
```bash
cd "c:\Users\EZ\Documents\Arquivos\.Trabalhos\Curso_EBAC\Front_end\13_Projeto_3"
git init
git add .
git commit -m "Initial commit - FitZone Landing Page"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/fitzone-landing-page.git
git push -u origin main
```

### Passo 3: Deploy na Vercel
1. Acesse [vercel.com](https://vercel.com)
2. Clique em **Sign Up** (ou **Login** se já tiver conta)
3. Faça login com GitHub
4. Clique em **Add New** → **Project**
5. Selecione o repositório `fitzone-landing-page`
6. Clique em **Deploy**

✅ Pronto! A Vercel fará o build e deploy automaticamente.

---

## 📝 Opção 3: Outras Plataformas

### Netlify
1. Arraste a pasta do projeto em [netlify.com/drop](https://app.netlify.com/drop)
2. Pronto! Deploy instantâneo

### GitHub Pages
1. Suba o código no GitHub
2. Vá em Settings → Pages
3. Source: **main branch**
4. Save

### Cloudflare Pages
1. Acesse [pages.cloudflare.com](https://pages.cloudflare.com)
2. Conecte seu GitHub
3. Selecione o repositório
4. Deploy

---

## 🔧 Configuração Adicional (Opcional)

### Arquivo `vercel.json` (já criado)
Este arquivo configura o comportamento da Vercel:
- Rotas
- Headers
- Redirects

---

## ✅ Checklist Pré-Deploy

- [x] Todos os arquivos criados (index.html, styles.css, main.js)
- [x] Imagens via CDN (Unsplash)
- [x] Bibliotecas via CDN (Bootstrap, jQuery, etc)
- [x] Formulário com validação funcionando
- [x] Site responsivo testado
- [x] Sem erros no console do navegador

---

## 📌 Links Úteis

- [Documentação Vercel](https://vercel.com/docs)
- [Documentação Netlify](https://docs.netlify.com)
- [GitHub Pages](https://pages.github.com)
- [Cloudflare Pages](https://developers.cloudflare.com/pages)

---

## 🎯 Próximos Passos Após o Deploy

1. ✅ Copie a URL gerada
2. ✅ Teste o site na URL de produção
3. ✅ Envie o link pela plataforma da EBAC
4. ✅ Compartilhe nas redes sociais! 🎉

---

**💡 Dica:** A Vercel faz deploy automático a cada novo commit no GitHub!
