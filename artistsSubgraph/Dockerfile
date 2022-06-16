# Docker file used to provide instructions on how Docker engine should build an image 

# gives us base image (always the same) on top of which this image will be built 
FROM node:16.14-alpine3.14@sha256:a93230d096610a42310869b16777623fbcacfd593e1b9956324470f760048758

# adds some metadata about this image
LABEL maintainer="Kairat Orozobekov"
LABEL description="Artists Apollo Server"

ENV PORT=8001

# Use /app as working directory
WORKDIR /app

# Copy the package.json and package-lock.json files into the working dir (/app)
COPY package.json package-lock.json ./

# Install node dependencies defined in package-lock.json (only production dependencies - dev dependencies are excluded)
RUN npm ci --only=production

# changing the owner to user with low privileges and restricted filesystem permissions
COPY --chown=node:node . .

# install dumb-init
RUN apk add --no-cache dumb-init~=1.2.5

# changing the owner to user with low privileges and restricted filesystem permissions
USER node

# Start the container by running our server
# dumb-init runs as PID 1, acting like a simple init system. It launches a single process 
# and then proxies all received signals to a session rooted at that child process
CMD ["dumb-init", "npm", "start"]

# We run our service on port 8001
EXPOSE 8001
