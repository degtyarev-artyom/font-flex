# font-flex
SCSS mixin for smooth font changes with exact size at breakpoint.

## Syntax example
```scss
@mixin font-flex($bp1, $fz1, $bp2, $fz2) {
  $fzDiff: $fz1 - $fz2;
  $bpDiff: $bp1 - $bp2;
  font-size: calc(#{$fz1}px + (#{$fzDiff}*100/#{$bpDiff})*1vw - (#{$bp1}px * #{$fzDiff}/#{$bpDiff}));
}

@include font-flex(1024, 24, 768, 20);
```
## Custom Parameters
`$bp1` first breakpoint<br>
`$fz1` font-size for first breakpoint<br>
`$bp2` second breakpoint<br>
`$fz2` font-size for second breakpoint
