# 🚀 How to Deploy to Vercel (Step-by-Step)

Follow these steps to deploy your Full Stack Bookstore application to Vercel.

## Step 1: Push your code to GitHub
Ensure all your local changes are committed and pushed to your GitHub repository.

## Step 2: Import Project to Vercel
1. Go to [Vercel Dashboard](https://vercel.com/new).
2. Find and select your GitHub repository.
3. Click "Import".

## Step 3: Configure Frontend (Vercel)
On the "Configure Project" screen:
1. **Root Directory**: Click "Edit" and select `frontend/bookstore`.
2. **Framework Preset**: Vercel should automatically detect **Vite**.
3. **Environment Variables**:
   * Add a new variable: `VITE_API_URL`
   * Value: Your Backend URL (e.g., your Render URL or the URL Vercel gives you for the backend).

## Step 4: Configure Backend (Options)

### Option A: Using Render (Recommended for Express)
1. Go to [Render](https://dashboard.render.com).
2. Create a "New Web Service".
3. **Root Directory**: `backend`
4. **Build Command**: `npm install`
5. **Start Command**: `npm start`
6. Add `MONGO_URI` to Environment Variables.

### Option B: Using Vercel (Full Stack)
If you want to host the backend on Vercel too:
1. I have already updated your `backend/server.js` to be Vercel-compatible.
2. I have added a `vercel.json` to your root directory.
3. You can import the **root** folder into a second Vercel project and it will treat the `api/` as serverless functions.

## Step 5: Final Check
1. Once both are deployed, copy the Backend URL.
2. Go back to your Frontend project settings in Vercel.
3. Update `VITE_API_URL` to the new Backend URL.
4. Redeploy the frontend.

---

### Need Help?
Check the `deployment_guide.md` in the `.gemini/antigravity` folder for more deep-dive details.
