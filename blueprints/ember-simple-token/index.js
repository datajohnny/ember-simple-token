module.exports = {
  normalizeEntityName() {},

  afterInstall() {
    return this.addPackagesToProject([
      { name: 'ember-simple-auth', target: '1.1.0' },
      { name: 'ember-get-config', target: '0.0.2' }
    ]);
  }
};
