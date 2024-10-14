FROM node:20.15 AS build

# WORKDIR /app

# COPY . ./

# RUN npm ci
# RUN npm run build

# # Nettoyage des dépendances supperflues 
# RUN npm prune --production

# #Inspiration MistralIA
# Create and change to the app directory.
WORKDIR /app

# Copy the app's source code.
COPY . .
# Copy package.json and package-lock.json (if one exists) to install dependencies.
# COPY package.json ./
# COPY package-lock.json ./

# Install production dependencies.
RUN npm ci
RUN npm install

# Copy the rest of the app's source code.
# COPY . .
# COPY src .
# COPY static .
# COPY svelte.config.js .
# COPY tsconfig.json .
# COPY vite.config.ts .

# Build the app. To add --only-production
RUN npm run build 

# Expose the port the app runs in.
EXPOSE 5000

# Serve the app.
CMD ["npm", "run", "preview"]