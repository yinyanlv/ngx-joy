import {SubjectService} from './subject.service';

describe('SubjectService', () => {
  let subject: SubjectService;

  beforeAll(() => {
    subject = new SubjectService();

  });

  it('should create subject', () => {
    expect(subject).toBeTruthy();
  });

  it('should publish action success', (done: () => void) => {
    subject.subscribe('test', (data) => {
      expect(data).toEqual('data for test');
      done();
    });

    subject.publish('test', 'data for test');
  });
});
