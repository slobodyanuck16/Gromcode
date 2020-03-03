  
import { createLogger } from './index';

it('should return []', () => {
    const log = createLogger();
    let logger = []
    let result = logger;

    expect(result).toEqual([]);
});

it('should get type === "error"', () => {
    const logger = createLogger();
    logger.error('error message');
    const result = logger.getRecords('error')[0].type;

    expect(result).toEqual('error');
})

it('should get type === "log"', () => {
    const logger = createLogger();
    logger.log('log message');
    const result = logger.getRecords('log')[0].type;

    expect(result).toEqual('log');
})