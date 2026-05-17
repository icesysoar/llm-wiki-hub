class ChatSessionManager {
    constructor(plugin) {
        this.plugin = plugin;
    }
    getSessions() { return this.plugin.settings.sessions || []; }
    async saveSessions(sessions) { this.plugin.settings.sessions = sessions; await this.plugin.saveSettings(); }
    async createSession(name) {
        const sessions = this.getSessions();
        const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
        const s = { id, name, messages: [], lastActive: Date.now() };
        sessions.push(s);
        await this.saveSessions(sessions);
        return s;
    }
    getSession(id) { return this.getSessions().find(s => s.id === id) || null; }
    async deleteSession(id) {
        let sessions = this.getSessions().filter(s => s.id !== id);
        await this.saveSessions(sessions);
    }
    async addMessage(sessionId, msg) {
        const sessions = this.getSessions();
        const s = sessions.find(x => x.id === sessionId);
        if (!s) return;
        s.messages.push(msg);
        s.lastActive = Date.now();
        await this.saveSessions(sessions);
    }
}
module.exports = ChatSessionManager;