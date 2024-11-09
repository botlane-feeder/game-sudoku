FROM node:20.15 AS build

# WORKDIR /app

# Create and change to the app directory.
WORKDIR /app

# Copy the app's source code.
COPY . .

# Install production dependencies.
RUN npm ci
RUN npm install

# Build the app. To add --only-production
# RUN npm prune --production
RUN npm run build 

# Expose the port the app runs in.
EXPOSE 5000

# Serve the app.
CMD ["npm", "run", "preview"]