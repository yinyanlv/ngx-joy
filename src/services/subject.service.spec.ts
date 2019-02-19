import {SubjectService} from './subject.service';

describe('SubjectService', () => {
  let subject: SubjectService;
  let globalData;
  const obj = {
    callback: function () {
    }
  };

  beforeAll(() => {
    subject = new SubjectService();
    subject.subscribe('test', obj.callback);
  });

  it('should create subject', () => {
    expect(subject).toBeTruthy();
  });

  beforeEach((done) => {
    spyOn(obj, 'callback').and.callFake((data) => {
      globalData = data;
      done();
    });

    subject.publish('test', 'data for test');
  });

  it('should publish action success', () => {
    expect(globalData).toEqual('data for test');
  });
});
