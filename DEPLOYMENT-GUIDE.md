# Deployment Guide - GitHub Actions CI/CD Setup

## 🎯 Overview

Your website is now configured with automated CI/CD using GitHub Actions. Every time you push code to the `main` branch, it will automatically deploy to your AWS S3 bucket.

## ⚙️ Setup Instructions

### Step 1: Configure AWS Credentials in GitHub

1. Go to your GitHub repository: https://github.com/yeshwanthlm/yeswanth-site
2. Click on **Settings** (top menu)
3. In the left sidebar, click **Secrets and variables** → **Actions**
4. Click **New repository secret**
5. Add the following two secrets:

   **Secret 1:**
   - Name: `AWS_ACCESS_KEY_ID`
   - Value: Your AWS Access Key ID

   **Secret 2:**
   - Name: `AWS_SECRET_ACCESS_KEY`
   - Value: Your AWS Secret Access Key

### Step 2: Verify AWS Region

The workflow is currently set to `us-east-1`. If your S3 bucket is in a different region, update `.github/workflows/deploy.yml`:

```yaml
aws-region: your-region-here  # e.g., ap-south-1
```

### Step 3: Test the Deployment

1. Make any small change to your website (e.g., update a text in `index.html`)
2. Commit and push:
   ```bash
   git add .
   git commit -m "Test CI/CD deployment"
   git push origin main
   ```
3. Go to the **Actions** tab in your GitHub repository
4. You should see the workflow running
5. Once complete (green checkmark), your changes will be live on S3!

## 🚀 How It Works

The GitHub Actions workflow (`.github/workflows/deploy.yml`) does the following:

1. **Triggers** on every push to the `main` branch
2. **Checks out** your code
3. **Configures** AWS credentials from GitHub secrets
4. **Syncs** all files to your S3 bucket
5. **Excludes** unnecessary files (.git, .github, node_modules, etc.)

## 📝 Adding New Speaking Events

Now that CI/CD is set up, adding events is even easier:

1. Create a new folder in `speaking-events/` with your event name
2. Add your event images to the folder
3. Create an `event.json` file with event details
4. Commit and push:
   ```bash
   git add .
   git commit -m "Add new speaking event: [Event Name]"
   git push origin main
   ```
5. GitHub Actions will automatically deploy to S3!

## 🔄 Manual Deployment

You can also trigger deployment manually:

1. Go to the **Actions** tab in GitHub
2. Click on **Deploy to S3** workflow
3. Click **Run workflow** button
4. Select the `main` branch
5. Click **Run workflow**

## 🌐 CloudFront Integration (Optional)

If you're using CloudFront for CDN, uncomment and update this line in `.github/workflows/deploy.yml`:

```yaml
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
```

Replace `YOUR_DISTRIBUTION_ID` with your actual CloudFront distribution ID.

## 🔒 Security Best Practices

1. **Never commit AWS credentials** to your repository
2. **Use IAM user** with minimal permissions (S3 write access only)
3. **Rotate credentials** periodically
4. **Enable MFA** on your AWS account

## 📊 Monitoring Deployments

- Check deployment status in the **Actions** tab
- View detailed logs for each deployment
- Get email notifications for failed deployments (configure in GitHub settings)

## 🆘 Troubleshooting

### Deployment Failed
- Check if AWS credentials are correctly set in GitHub Secrets
- Verify S3 bucket name in the workflow file
- Check AWS IAM permissions

### Files Not Updating
- Clear browser cache
- Check if the workflow completed successfully
- Verify S3 bucket permissions

### Images Not Loading
- Ensure images are committed to the repository
- Check S3 bucket public access settings
- Verify image paths in event.json files

## 📞 Need Help?

If you encounter any issues:
1. Check the Actions tab for error logs
2. Review AWS CloudWatch logs
3. Verify S3 bucket configuration

---

Happy deploying! 🚀
