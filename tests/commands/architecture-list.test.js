const architectureList = require('../../service/commands/architecture-list')

// describe("list architecture", () => {
//     let consoleLogSpy;

//     beforeEach(() => {
//         consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
//     });

//     afterEach(() => {
//         consoleLogSpy.mockRestore();
//     });

//     it('should list all architecture', () => {
//         architectureList.actions();


//         const expectedArchitecture = [
//             'x86',
//             'ARM',
//             'MIPS'
//         ];


//         expectedArchitecture.forEach((arch) => {
//             expectedArchitecture(consoleLogSpy).toHaveBeenCalledWith(expect.stringContaining(arch));
//         });
//     })
// });