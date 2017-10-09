"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ config, server }) => {
    const onListen = () => {
        // tslint:disable-next-line:no-console
        console.log(`Listening on port ${config.MN_SERVER_PORT}`);
    };
    server.listen(config.MN_SERVER_PORT, onListen);
};
