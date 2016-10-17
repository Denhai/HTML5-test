# HTML5-test

I decided to keep this super simple.

* I used Bootstrap. However, 146kb of CSS was complete overkill. So I used [uncss](https://github.com/giakki/uncss) to bring it down to 4kb.
I would normally minify ontop of that, but 4kb is already tiny.
  * uncss has a dependency on phantomjs, so I took it out of the default gulp task to avoid confusion.
* I didn't feel the need to add javascript to the page. I may add it later if I can think of some behaviour that the page needs.
