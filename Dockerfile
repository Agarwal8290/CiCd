FROM mcr.microsoft.com/playwright:latest

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy entire project
COPY . .

# Install Playwright browsers
RUN npx playwright install

# Ensure results directory exists
RUN mkdir -p test-results

# Default command to run tests with specific reporting
CMD ["npx", "playwright", "test", "--reporter=junit,html"]