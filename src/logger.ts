import { LoggerBuilder, LogLevel } from "simplr-logger";
import { ConsoleMessageHandler } from "simplr-logger/handlers";

export const logger = new LoggerBuilder({
    DefaultLogLevel: {
        LogLevel: LogLevel.Trace,
        LogLevelIsBitMask: false
    },
    WriteMessageHandlers: [
        {
            Handler: new ConsoleMessageHandler(),
            LogLevel: LogLevel.Critical | LogLevel.Debug | LogLevel.Information | LogLevel.Error | LogLevel.Trace | LogLevel.Warning,
            LogLevelIsBitMask: true
        }
    ]
});
