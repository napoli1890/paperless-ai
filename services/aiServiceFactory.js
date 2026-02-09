const config = require('../config/config');
const openaiService = require('./openaiService');
const ollamaService = require('./ollamaService');
const customService = require('./customService');
const azureService = require('./azureService');

class AIServiceFactory {
  static getService() {
    switch (config.aiProvider) {
      case 'ollama':
        return ollamaService;
      case 'openai':
        return openaiService;
      case 'custom':
        return customService;
      case 'azure':
        return azureService;
      default:
        return openaiService;
    }
  }
}

module.exports = AIServiceFactory;
