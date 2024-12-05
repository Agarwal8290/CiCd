# Use official Playwright image
FROM mcr.microsoft.com/playwright:latest

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy entire project
COPY . .

# Install Playwright browsers
RUN npx playwright install

# Default command to run tests
CMD ["npx", "playwright", "test"]