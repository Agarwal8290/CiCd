FROM mcr.microsoft.com/playwright:latest

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install project dependencies
RUN npm ci

# Copy entire project
COPY . .

# Install Playwright browsers
RUN npx playwright install

# Install Playwright Dependencies
RUN npx playwright install-deps

# Ensure reports are generated to this directory
# VOLUME ["/app/test-results", "/app/playwright-report"]

# Default command to run tests with specific reporting
CMD ["npx", "playwright", "test", "--reporter=junit,html", "--output=test-results"]