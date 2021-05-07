# flex-prop (SCSS mixin)
SCSS mixin  for smooth change of property value with exact size at breakpoint.

## Syntax example
```scss
@mixin flex-prop($prop, $bp1, $val1, $bp2, $val2) {
  $val: $val1 - $val2;
  $bp: $bp1 - $bp2;
  #{$prop}: calc(#{$val1}px + (#{$val}*100/#{$bp})*1vw - (#{$bp1}px * #{$val}/#{$bp}));

  @media all and (max-width: #{$bp2}px) {
    #{$prop}: #{$val2}px;
  }
}

@include flex-prop('font-size', 1024, 24, 768, 20);
```
## Custom Parameters
`$prop` property name<br>
`$bp1` first breakpoint<br>
`$val1` property value for the first breakpoint<br>
`$bp2` second breakpoint<br>
`$val2` property value for the second breakpoint
