export class Helper{
     static cleanUrl(url:string) {
        // حذف هر چیزی قبل از ":" (مثل "sc-domain:") و حذف "www."
      url = url.replace(/.*?:\/\//, '').replace(/.*?:/, '').replace("www.", "");
      // اگر آدرس با "/" به پایان می‌رسد، فقط آن را حذف کن
      return url.endsWith('/') ? url.slice(0, -1) : url;
      }
}