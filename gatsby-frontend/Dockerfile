FROM node:20-alpine

WORKDIR /app

# Install system dependencies for Sharp
RUN apk add --no-cache \
    vips-dev \
    python3 \
    make \
    g++ \
    libc6-compat

# Copy package.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Sharp removed due to Alpine Linux issues

# Copy entire project
COPY . .

EXPOSE 8000

CMD ["npm", "run", "develop", "--", "--host", "0.0.0.0"]