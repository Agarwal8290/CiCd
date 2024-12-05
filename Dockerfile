# Use the official Playwright base image
FROM mcr.microsoft.com/playwright:v1.39.0

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Install Playwright dependencies
RUN npx playwright install

# Define the entry point
CMD ["npx", "playwright", "test"]
