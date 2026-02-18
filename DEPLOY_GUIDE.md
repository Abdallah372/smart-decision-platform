## خطوات رفع المشروع على GitHub

### 1. احذف الملفات غير المستخدمة يدوياً

```
src/App.css                              ← احذفه
src/components/interactive/ParticleBackground.jsx  ← احذفه
```

### 2. تأكد أن .gitignore يحتوي على:

```
.gemini/
.agent/
node_modules/
dist/
```

### 3. أوامر Git (في Terminal داخل مجلد المشروع)

```bash
# تهيئة Git (إذا لم يكن موجوداً)
git init

# ربط بالـ repository على GitHub
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# إضافة كل الملفات
git add .

# Commit
git commit -m "feat: نموذج محاكاة دعم القرار - عبدالله العبادي 2026"

# رفع على GitHub
git push -u origin main
```

### 4. تفعيل GitHub Pages

- اذهب إلى Settings > Pages
- اختر Source: GitHub Actions
- الـ workflow في `.github/workflows/static.yml` سيبني وينشر تلقائياً
