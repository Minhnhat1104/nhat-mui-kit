import 'tinymce';

declare module 'tinymce' {
  interface Editor {
    backToEditor?: () => void;
  }
}
