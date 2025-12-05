import { HttpInterceptorFn } from '@angular/common/http';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {
  console.log("Url of request: " + req.url);
  console.log("Body of request: " + JSON.stringify(req.body));

  return next(req);
};
