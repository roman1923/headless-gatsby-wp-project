# Contributing to WordPress

Thank you for your interest in contributing to our project! This document provides guidelines and information for contributors.

## 🚀 Getting Started

### Prerequisites
- Node.js 20+
- Docker & Docker Compose
- Git
- Basic knowledge of React, Gatsby, and WordPress

### Development Setup

1. **Fork and Clone**
   ```bash
   git clone https://github.com/
   wordpress-developers-db.git
   cd wordpress-developers-db
   ```

2. **Install Dependencies**
   ```bash
   cd gatsby-frontend
   npm install
   ```

3. **Start Development Environment**
   ```bash
   docker-compose up -d
   ```

4. **Run Tests**
   ```bash
   npm run test
   npm run test:e2e
   ```

## 📝 Development Guidelines

### Code Style
- Use **ESLint** and **Prettier** for code formatting
- Follow **Conventional Commits** specification
- Write **descriptive commit messages**
- Include **JSDoc comments** for complex functions

### Testing Requirements
- **Unit Tests**: Minimum 80% coverage
- **E2E Tests**: All critical user flows must be tested
- **Performance Tests**: Lighthouse scores must remain A+

### Pull Request Process

1. **Create a Feature Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Your Changes**
   - Write clean, documented code
   - Add tests for new functionality
   - Update documentation as needed

3. **Run Quality Checks**
   ```bash
   npm run lint
   npm run test
   npm run test:e2e
   npm run lighthouse
   ```

4. **Submit Pull Request**
   - Use descriptive title and description
   - Reference any related issues
   - Ensure all CI checks pass

## 🧪 Testing

### Unit Tests
```bash
npm run test              # Run all tests
npm run test:watch        # Run tests in watch mode
npm run test:coverage     # Run tests with coverage report
```

### E2E Tests
```bash
npm run test:e2e          # Run E2E tests
npm run test:e2e:ui       # Run E2E tests with UI
```

### Performance Tests
```bash
npm run lighthouse        # Run Lighthouse performance tests
npm run analyze           # Analyze bundle size
```

## 📚 Documentation

- Update README.md for significant changes
- Add JSDoc comments for new functions
- Update API documentation for GraphQL changes
- Include examples in code comments

## 🐛 Bug Reports

When reporting bugs, please include:
- **Steps to reproduce**
- **Expected behavior**
- **Actual behavior**
- **Environment details** (OS, browser, Node.js version)
- **Screenshots** if applicable

## ✨ Feature Requests

For feature requests, please:
- **Describe the feature** clearly
- **Explain the use case**
- **Consider implementation complexity**
- **Check for existing similar requests**

## 📞 Getting Help

- **GitHub Issues** - For bugs and feature requests
- **Discussions** - For questions and general discussion
- **Documentation** - Check existing docs first

## 🏆 Recognition

Contributors will be recognized in:
- **README.md** - Contributor section
- **Release Notes** - Feature contributions
- **GitHub** - Contributor statistics

Thank you for contributing to WordPress! 🎉
