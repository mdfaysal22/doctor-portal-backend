"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const http_status_1 = __importDefault(require("http-status"));
const routers_1 = __importDefault(require("./app/routers"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const globalErrorHandler_1 = require("./app/middleware/globalErrorHandler");
const app = (0, express_1.default)();
const corsOptions = {
    origin: true,
    credentials: true,
};
app.use('*', (0, cors_1.default)(corsOptions));
app.use((0, cookie_parser_1.default)());
//parser
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/api/v1', routers_1.default);
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
app.get('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    res.status(http_status_1.default.OK).json({
        success: true,
        message: 'Welcome HTTP SERVER',
    });
}));
// ! Global Error Handler
app.use(globalErrorHandler_1.globalErrorHandler);
// ! not found Route-- 
app.use((req, res, next) => {
    res.status(http_status_1.default.NOT_FOUND).json({
        success: false,
        errorMessage: {
            message: 'not found',
            path: req.path
        }
    });
});
exports.default = app;
