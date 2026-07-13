/* @ds-bundle: {"format":3,"namespace":"UGConnectDesignSystem_1dd337","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"BriefCard","sourcePath":"components/marketing/BriefCard.jsx"},{"name":"CreatorCard","sourcePath":"components/marketing/CreatorCard.jsx"},{"name":"StepCard","sourcePath":"components/marketing/StepCard.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"2a3d3537f3dd","components/core/Badge.jsx":"ba4060437abc","components/core/Button.jsx":"397105bc2bb5","components/core/Card.jsx":"ed6de5a989fc","components/core/Stat.jsx":"dde7dfa77aa3","components/core/Tag.jsx":"54a1866ac431","components/forms/Checkbox.jsx":"3147eddfd199","components/forms/Input.jsx":"73d5c2d5a4d5","components/forms/Select.jsx":"87c5e18abcc1","components/forms/Switch.jsx":"7b3df32c5325","components/forms/Textarea.jsx":"b710a39bdee2","components/marketing/BriefCard.jsx":"1a0a2d590d90","components/marketing/CreatorCard.jsx":"c0ca69d3040d","components/marketing/StepCard.jsx":"302d5735a5df","ui_kits/dashboard/app.jsx":"feba272d1b1d","ui_kits/dashboard/newbrief.jsx":"bfcd43a2d242","ui_kits/dashboard/screens.jsx":"9d0c60ddc2b8","ui_kits/dashboard/shell.jsx":"47cbe085252a","ui_kits/landing/app.jsx":"8be5785190a6","ui_kits/landing/sections1.jsx":"6dd9eb6d11c4","ui_kits/landing/sections2.jsx":"29c273a8f3bf","ui_kits/uglib.jsx":"8cccbf3181b0"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.UGConnectDesignSystem_1dd337 = window.UGConnectDesignSystem_1dd337 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * UGConnect — Avatar
 * Round creator/brand avatar. Image or initials fallback on a purple tint.
 * Optional verified ring and online dot.
 */
function Avatar({
  src,
  name = '',
  size = 44,
  ring = false,
  status = null,
  style = {},
  ...rest
}) {
  const initials = name.split(' ').filter(Boolean).slice(0, 2).map(w => w[0].toUpperCase()).join('');
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-flex',
      width: size,
      height: size,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      overflow: 'hidden',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--purple-100)',
      color: 'var(--purple-700)',
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: size * 0.38,
      boxShadow: ring ? '0 0 0 2.5px var(--white), 0 0 0 4.5px var(--brand-primary)' : 'var(--ring-card)'
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials || '?'), status && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      width: size * 0.28,
      height: size * 0.28,
      borderRadius: '50%',
      background: status === 'online' ? 'var(--success-600)' : 'var(--ink-400)',
      border: '2px solid var(--white)'
    }
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * UGConnect — Badge
 * Small status / category pill. Soft tinted fills, never used as body text.
 */
function Badge({
  children,
  tone = 'brand',
  size = 'md',
  dot = false,
  style = {},
  ...rest
}) {
  const tones = {
    brand: {
      bg: 'var(--purple-100)',
      fg: 'var(--purple-700)'
    },
    soft: {
      bg: 'var(--purple-50)',
      fg: 'var(--purple-600)'
    },
    neutral: {
      bg: 'var(--line-100)',
      fg: 'var(--ink-700)'
    },
    success: {
      bg: 'var(--success-100)',
      fg: 'var(--success-600)'
    },
    warning: {
      bg: 'var(--warning-100)',
      fg: 'var(--warning-600)'
    },
    danger: {
      bg: 'var(--danger-100)',
      fg: 'var(--danger-600)'
    },
    info: {
      bg: 'var(--info-100)',
      fg: 'var(--info-600)'
    },
    reward: {
      bg: 'var(--gold-100)',
      fg: 'var(--warning-600)'
    },
    solid: {
      bg: 'var(--brand-primary)',
      fg: 'var(--white)'
    }
  };
  const t = tones[tone] || tones.brand;
  const sz = size === 'sm' ? {
    padding: '3px 9px',
    fontSize: 11
  } : {
    padding: '5px 12px',
    fontSize: 12.5
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: t.bg,
      color: t.fg,
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      letterSpacing: '0.01em',
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      ...sz,
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'currentColor'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * UGConnect — Button
 * Pill-shaped, Poppins SemiBold. Purple primary with soft brand glow on hover.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  type = 'button',
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: 13,
      gap: 6,
      icon: 16
    },
    md: {
      padding: '11px 22px',
      fontSize: 15,
      gap: 8,
      icon: 18
    },
    lg: {
      padding: '15px 30px',
      fontSize: 16,
      gap: 10,
      icon: 20
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: 'var(--brand-primary)',
      color: 'var(--text-on-brand)',
      border: '1.5px solid transparent'
    },
    secondary: {
      background: 'var(--purple-50)',
      color: 'var(--brand-primary)',
      border: '1.5px solid transparent'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-strong)',
      border: '1.5px solid var(--border-subtle)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-strong)',
      border: '1.5px solid transparent'
    },
    dark: {
      background: 'var(--brand-dark)',
      color: 'var(--text-on-brand)',
      border: '1.5px solid transparent'
    }
  };
  const v = variants[variant] || variants.primary;
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const hoverStyle = !disabled && hover ? {
    primary: {
      background: 'var(--brand-primary-hover)',
      boxShadow: 'var(--shadow-brand)'
    },
    secondary: {
      background: 'var(--purple-100)'
    },
    outline: {
      background: 'var(--purple-50)',
      borderColor: 'var(--border-strong)'
    },
    ghost: {
      background: 'var(--purple-50)'
    },
    dark: {
      background: 'var(--purple-900)'
    }
  }[variant] : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      padding: s.padding,
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: s.fontSize,
      lineHeight: 1,
      letterSpacing: '0.005em',
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transform: press && !disabled ? 'scale(0.97)' : 'scale(1)',
      transition: 'background var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
      whiteSpace: 'nowrap',
      ...v,
      ...hoverStyle,
      ...style
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: s.icon,
      height: s.icon
    }
  }, iconLeft), children, iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: s.icon,
      height: s.icon
    }
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * UGConnect — Card
 * White surface on the lavender canvas: soft shadow, large radius, inset ring
 * instead of a hard border. Lifts gently on hover when `interactive`.
 */
function Card({
  children,
  interactive = false,
  padding = 'var(--space-5)',
  elevation = 'sm',
  style = {},
  onClick,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const shadows = {
    flat: 'var(--ring-card)',
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)'
  };
  const baseShadow = shadows[elevation] || shadows.sm;
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: interactive && hover ? 'var(--shadow-lg)' : baseShadow,
      padding,
      transform: interactive && hover ? 'translateY(-3px)' : 'translateY(0)',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      cursor: interactive ? 'pointer' : 'default',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * UGConnect — Stat
 * Big display number + label for trust signals ("+90 creators ready").
 */
function Stat({
  value,
  label,
  sublabel = null,
  align = 'left',
  accent = 'brand',
  style = {},
  ...rest
}) {
  const colors = {
    brand: 'var(--brand-primary)',
    dark: 'var(--brand-dark)',
    ink: 'var(--text-strong)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      textAlign: align,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(32px, 4vw, 44px)',
      lineHeight: 1,
      letterSpacing: 'var(--tracking-tight)',
      color: colors[accent] || colors.brand
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 14.5,
      color: 'var(--text-strong)'
    }
  }, label), sublabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, sublabel));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * UGConnect — Tag
 * Selectable category chip (creator niches, brief filters). Outline by default,
 * filled purple when `selected`.
 */
function Tag({
  children,
  selected = false,
  onClick,
  removable = false,
  onRemove,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const interactive = !!onClick || removable;
  const base = selected ? {
    background: 'var(--brand-primary)',
    color: 'var(--white)',
    borderColor: 'var(--brand-primary)'
  } : {
    background: 'var(--white)',
    color: 'var(--text-body)',
    borderColor: 'var(--border-subtle)'
  };
  const hoverStyle = hover && !selected ? {
    borderColor: 'var(--border-strong)',
    background: 'var(--purple-50)'
  } : {};
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      padding: '7px 14px',
      fontFamily: 'var(--font-ui)',
      fontWeight: 500,
      fontSize: 13.5,
      border: '1.5px solid',
      borderRadius: 'var(--radius-pill)',
      cursor: interactive ? 'pointer' : 'default',
      userSelect: 'none',
      transition: 'all var(--dur-fast) var(--ease-out)',
      ...base,
      ...hoverStyle,
      ...style
    }
  }, rest), children, removable && /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove && onRemove();
    },
    style: {
      display: 'inline-flex',
      fontSize: 15,
      lineHeight: 1,
      opacity: 0.7,
      marginRight: -2
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * UGConnect — Checkbox
 * Rounded checkbox with purple fill + check when selected.
 */
function Checkbox({
  checked = false,
  onChange,
  disabled = false,
  label,
  id,
  style = {},
  ...rest
}) {
  const inputId = id || `cb-${Math.random().toString(36).slice(2, 8)}`;
  const toggle = () => {
    if (!disabled && onChange) onChange(!checked);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", _extends({
    role: "checkbox",
    "aria-checked": checked,
    id: inputId,
    onClick: toggle,
    style: {
      width: 20,
      height: 20,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-xs)',
      background: checked ? 'var(--brand-primary)' : 'var(--white)',
      border: `1.5px solid ${checked ? 'var(--brand-primary)' : 'var(--border-subtle)'}`,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all var(--dur-fast) var(--ease-out)'
    }
  }, rest), checked && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "white",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 14.5,
      color: 'var(--text-strong)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * UGConnect — Input
 * Labeled text field. 14px radius, hairline border, purple focus ring.
 */
function Input({
  label,
  hint,
  error,
  leadingIcon,
  value,
  onChange,
  placeholder,
  type = 'text',
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || `in-${Math.random().toString(36).slice(2, 8)}`;
  const borderColor = error ? 'var(--danger-600)' : focus ? 'var(--brand-primary)' : 'var(--border-subtle)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 500,
      fontSize: 13.5,
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      background: disabled ? 'var(--purple-50)' : 'var(--white)',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      padding: '0 14px',
      boxShadow: focus ? `0 0 0 4px var(--focus-ring)` : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)'
    }
  }, leadingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--text-muted)',
      width: 18,
      height: 18
    }
  }, leadingIcon), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-ui)',
      fontSize: 15,
      color: 'var(--text-strong)',
      padding: '12px 0'
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 12.5,
      color: error ? 'var(--danger-600)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * UGConnect — Select
 * Styled wrapper over a native <select> with a chevron. Matches Input.
 */
function Select({
  label,
  hint,
  value,
  onChange,
  options = [],
  placeholder,
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || `sel-${Math.random().toString(36).slice(2, 8)}`;
  const opts = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 500,
      fontSize: 13.5,
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: inputId,
    value: value,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      fontFamily: 'var(--font-ui)',
      fontSize: 15,
      color: value ? 'var(--text-strong)' : 'var(--text-faint)',
      background: disabled ? 'var(--purple-50)' : 'var(--white)',
      border: `1.5px solid ${focus ? 'var(--brand-primary)' : 'var(--border-subtle)'}`,
      borderRadius: 'var(--radius-md)',
      padding: '13px 40px 13px 14px',
      outline: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      boxShadow: focus ? `0 0 0 4px var(--focus-ring)` : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)'
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), opts.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("svg", {
    style: {
      position: 'absolute',
      right: 14,
      pointerEvents: 'none'
    },
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--text-muted)",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  }))), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * UGConnect — Switch
 * Pill toggle. Purple when on. Use for settings / opt-ins.
 */
function Switch({
  checked = false,
  onChange,
  disabled = false,
  label,
  id,
  style = {},
  ...rest
}) {
  const inputId = id || `sw-${Math.random().toString(36).slice(2, 8)}`;
  const toggle = () => {
    if (!disabled && onChange) onChange(!checked);
  };
  const control = /*#__PURE__*/React.createElement("span", _extends({
    role: "switch",
    "aria-checked": checked,
    id: inputId,
    onClick: toggle,
    style: {
      position: 'relative',
      width: 44,
      height: 26,
      flex: '0 0 auto',
      background: checked ? 'var(--brand-primary)' : 'var(--line-200)',
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'background var(--dur-base) var(--ease-out)'
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: checked ? 21 : 3,
      width: 20,
      height: 20,
      background: 'var(--white)',
      borderRadius: '50%',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--dur-base) var(--ease-spring)'
    }
  }));
  if (!label) return control;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    }
  }, control, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 14.5,
      color: 'var(--text-strong)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * UGConnect — Textarea
 * Multiline field matching Input styling. Use for brief descriptions.
 */
function Textarea({
  label,
  hint,
  error,
  value,
  onChange,
  placeholder,
  rows = 4,
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || `ta-${Math.random().toString(36).slice(2, 8)}`;
  const borderColor = error ? 'var(--danger-600)' : focus ? 'var(--brand-primary)' : 'var(--border-subtle)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 500,
      fontSize: 13.5,
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: inputId,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    rows: rows,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 15,
      color: 'var(--text-strong)',
      background: disabled ? 'var(--purple-50)' : 'var(--white)',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      padding: '12px 14px',
      resize: 'vertical',
      outline: 'none',
      boxShadow: focus ? `0 0 0 4px var(--focus-ring)` : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
      lineHeight: 1.5
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 12.5,
      color: error ? 'var(--danger-600)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/marketing/BriefCard.jsx
try { (() => {
/**
 * UGConnect — BriefCard
 * A brand campaign brief in the creator feed: brand, title, reward, meta, apply.
 */
function BriefCard({
  brand,
  brandLogo,
  title,
  niche,
  reward,
  deadline,
  applicants,
  rewardTone = 'reward',
  onApply,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      padding: 'var(--space-5)',
      transform: hover ? 'translateY(-2px)' : 'translateY(0)',
      transition: 'all var(--dur-base) var(--ease-out)',
      width: 320,
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    src: brandLogo,
    name: brand,
    size: 36
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--text-strong)'
    }
  }, brand), niche && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, niche))), reward && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: rewardTone,
    size: "sm"
  }, reward)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 18,
      lineHeight: 1.25,
      color: 'var(--text-strong)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18
    }
  }, deadline && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-ui)',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "12 7 12 12 15 14"
  })), deadline), applicants != null && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-ui)',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "7",
    r: "4"
  })), applicants, " applied")), /*#__PURE__*/React.createElement("button", {
    onClick: onApply,
    style: {
      width: '100%',
      padding: '11px',
      cursor: 'pointer',
      marginTop: 2,
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 14.5,
      color: 'var(--white)',
      background: hover ? 'var(--brand-primary-hover)' : 'var(--brand-primary)',
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      boxShadow: hover ? 'var(--shadow-brand)' : 'none',
      transition: 'all var(--dur-base) var(--ease-out)'
    }
  }, "Apply to brief"));
}
Object.assign(__ds_scope, { BriefCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/BriefCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/CreatorCard.jsx
try { (() => {
/**
 * UGConnect — CreatorCard
 * Marketplace card for a creator: cover work, avatar, niches, rate.
 */
function CreatorCard({
  name,
  handle,
  avatar,
  cover,
  niches = [],
  rate,
  rating,
  verified = false,
  onView,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      overflow: 'hidden',
      transform: hover ? 'translateY(-4px)' : 'translateY(0)',
      transition: 'all var(--dur-base) var(--ease-out)',
      width: 260,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 150,
      background: 'var(--purple-100)'
    }
  }, cover && /*#__PURE__*/React.createElement("img", {
    src: cover,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), rate && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 12,
      right: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "solid",
    size: "sm"
  }, rate))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 18px 18px',
      marginTop: -28
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    src: avatar,
    name: name,
    size: 56,
    ring: verified,
    style: {
      boxShadow: '0 0 0 4px var(--white)',
      borderRadius: '50%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      display: 'flex',
      alignItems: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 18,
      color: 'var(--text-strong)'
    }
  }, name), rating && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 3,
      fontFamily: 'var(--font-ui)',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "var(--gold-500)",
    stroke: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z"
  })), rating)), handle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 13,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, handle), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6,
      marginTop: 12
    }
  }, niches.slice(0, 3).map(n => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 12,
      fontWeight: 500,
      color: 'var(--purple-700)',
      background: 'var(--purple-50)',
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)'
    }
  }, n))), /*#__PURE__*/React.createElement("button", {
    onClick: onView,
    style: {
      marginTop: 16,
      width: '100%',
      padding: '10px',
      cursor: 'pointer',
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 14,
      color: hover ? 'var(--white)' : 'var(--brand-primary)',
      background: hover ? 'var(--brand-primary)' : 'var(--purple-50)',
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      transition: 'all var(--dur-base) var(--ease-out)'
    }
  }, "View profile")));
}
Object.assign(__ds_scope, { CreatorCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/CreatorCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/StepCard.jsx
try { (() => {
/**
 * UGConnect — StepCard
 * Numbered "how it works" step with an icon. Use in brand/creator flows.
 */
function StepCard({
  step,
  icon,
  title,
  children,
  accent = 'brand',
  style = {}
}) {
  const accents = {
    brand: {
      bg: 'var(--purple-50)',
      fg: 'var(--brand-primary)'
    },
    dark: {
      bg: 'var(--purple-100)',
      fg: 'var(--brand-dark)'
    },
    reward: {
      bg: 'var(--gold-100)',
      fg: 'var(--warning-600)'
    }
  };
  const a = accents[accent] || accents.brand;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-md)',
      background: a.bg,
      color: a.fg,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, icon || /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 20
    }
  }, step)), icon && step != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 15,
      color: a.fg,
      letterSpacing: '0.04em'
    }
  }, "STEP ", step)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 19,
      color: 'var(--text-strong)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 14.5,
      lineHeight: 1.55,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, children));
}
Object.assign(__ds_scope, { StepCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/StepCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/app.jsx
try { (() => {
/* UGConnect — Dashboard app composition */
const {
  Sidebar,
  Topbar
} = window.UGDashShell;
const {
  DashboardHome,
  DiscoverScreen,
  EmptyScreen
} = window.UGDashScreens;
const {
  NewBriefModal
} = window.UGNewBrief;
const TITLES = {
  home: ['Dashboard', ''],
  briefs: ['My briefs', 'Manage and track all your campaigns.'],
  discover: ['Discover creators', 'Find the right creators for your next campaign.'],
  messages: ['Messages', 'Chat with creators about your briefs.'],
  settings: ['Settings', 'Manage your brand account.']
};
function DashboardApp() {
  const [nav, setNav] = React.useState('home');
  const [modal, setModal] = React.useState(false);
  const [title, subtitle] = TITLES[nav];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      minHeight: '100vh',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement(Sidebar, {
    active: nav,
    onNav: setNav,
    onNew: () => setModal(true)
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(Topbar, {
    title: title,
    subtitle: subtitle
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, nav === 'home' && /*#__PURE__*/React.createElement(DashboardHome, {
    onNew: () => setModal(true)
  }), nav === 'briefs' && /*#__PURE__*/React.createElement(DashboardHome, {
    onNew: () => setModal(true)
  }), nav === 'discover' && /*#__PURE__*/React.createElement(DiscoverScreen, null), nav === 'messages' && /*#__PURE__*/React.createElement(EmptyScreen, {
    icon: "message-circle",
    title: "No messages yet",
    body: "When you hire a creator, your conversations will show up here."
  }), nav === 'settings' && /*#__PURE__*/React.createElement(EmptyScreen, {
    icon: "settings",
    title: "Account settings",
    body: "Brand profile, billing and usage-rights defaults live here."
  }))), /*#__PURE__*/React.createElement(NewBriefModal, {
    open: modal,
    onClose: () => setModal(false)
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(DashboardApp, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/newbrief.jsx
try { (() => {
/* UGConnect — New Brief creation flow (modal stepper) */
const {
  Button,
  Badge,
  Tag,
  Input,
  Textarea,
  Select,
  Switch,
  BriefCard,
  Icon
} = window.UG;
function Stepper({
  step
}) {
  const steps = ['Campaign', 'Creators', 'Budget & rights', 'Review'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 0
    }
  }, steps.map((s, i) => {
    const done = i < step,
      on = i === step;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: s
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 9
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 28,
        height: 28,
        borderRadius: '50%',
        flex: '0 0 auto',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-ui)',
        fontWeight: 700,
        fontSize: 13,
        background: done ? 'var(--brand-primary)' : on ? 'var(--white)' : 'var(--purple-50)',
        color: done ? '#fff' : on ? 'var(--brand-primary)' : 'var(--text-faint)',
        border: on ? '2px solid var(--brand-primary)' : '2px solid transparent'
      }
    }, done ? /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 15
    }) : i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-ui)',
        fontWeight: on ? 600 : 500,
        fontSize: 13.5,
        color: on || done ? 'var(--text-strong)' : 'var(--text-faint)'
      }
    }, s)), i < steps.length - 1 && /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        height: 2,
        background: done ? 'var(--brand-primary)' : 'var(--border-subtle)',
        margin: '0 14px',
        borderRadius: 2
      }
    }));
  }));
}
function NewBriefModal({
  open,
  onClose
}) {
  const [step, setStep] = React.useState(0);
  const [paid, setPaid] = React.useState(true);
  const [usage, setUsage] = React.useState(true);
  const [contentTypes, setContentTypes] = React.useState(['Vertical video']);
  if (!open) return null;
  const toggleType = t => setContentTypes(p => p.includes(t) ? p.filter(x => x !== t) : [...p, t]);
  const next = () => setStep(s => Math.min(3, s + 1));
  const back = () => setStep(s => Math.max(0, s - 1));
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'var(--overlay-scrim)',
      backdropFilter: 'blur(3px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: 720,
      maxWidth: '100%',
      maxHeight: '92vh',
      overflow: 'auto',
      background: 'var(--white)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-xl)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '22px 28px',
      borderBottom: '1px solid var(--border-faint)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 'var(--radius-md)',
      background: 'var(--brand-primary)',
      color: '#fff',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "file-pen-line",
    size: 18
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 19,
      color: 'var(--ink-900)'
    }
  }, "Create a brief"), /*#__PURE__*/React.createElement(Badge, {
    tone: "solid",
    size: "sm"
  }, "First one free")), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      width: 34,
      height: 34,
      borderRadius: '50%',
      border: 'none',
      background: 'var(--purple-50)',
      cursor: 'pointer',
      color: 'var(--ink-700)',
      fontSize: 18,
      lineHeight: 1
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '22px 28px'
    }
  }, /*#__PURE__*/React.createElement(Stepper, {
    step: step
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 28px 4px',
      minHeight: 280
    }
  }, step === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Campaign title",
    placeholder: "e.g. UGC for our collagen launch",
    value: "UGC for collagen launch",
    onChange: () => {}
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Niche",
    options: ['Beauty', 'Fitness', 'Skincare', 'Food', 'Tech'],
    value: "Beauty",
    onChange: () => {}
  }), /*#__PURE__*/React.createElement(Input, {
    label: "How many creators?",
    value: "3",
    onChange: () => {},
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "users",
      size: 17
    })
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 500,
      fontSize: 13.5,
      color: 'var(--text-strong)',
      marginBottom: 9
    }
  }, "Content type"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 9,
      flexWrap: 'wrap'
    }
  }, ['Vertical video', 'Photo', 'Unboxing', 'Tutorial', 'Review'].map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    selected: contentTypes.includes(t),
    onClick: () => toggleType(t)
  }, t)))), /*#__PURE__*/React.createElement(Textarea, {
    label: "What do you need?",
    rows: 2,
    placeholder: "Describe the concept and deliverables\u2026",
    value: "3 vertical videos: unboxing + first impressions, bright and natural.",
    onChange: () => {}
  })), step === 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Creator audience size",
    options: ['Any', 'Nano (1k–10k)', 'Micro (10k–100k)', 'Mid (100k–500k)'],
    value: "Micro (10k\u2013100k)",
    onChange: () => {}
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Location",
    options: ['Anywhere', 'Mexico', 'Spain', 'Colombia', 'Argentina'],
    value: "Anywhere",
    onChange: () => {}
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 500,
      fontSize: 13.5,
      color: 'var(--text-strong)',
      marginBottom: 9
    }
  }, "Must-have niches"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 9,
      flexWrap: 'wrap'
    }
  }, ['Beauty', 'Skincare', 'Wellness', 'Lifestyle'].map((t, i) => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    selected: i < 2,
    onClick: () => {}
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      background: 'var(--purple-50)',
      borderRadius: 'var(--radius-md)',
      padding: '14px 16px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    size: 20,
    color: "var(--brand-primary)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 14,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("strong", null, "+90 creators"), " match this brief so far."))), step === 2 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Budget per creator",
    value: "$120",
    onChange: () => {},
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "wallet",
      size: 17
    })
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Deadline",
    value: "Aug 30, 2026",
    onChange: () => {},
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "calendar",
      size: 17
    })
  })), /*#__PURE__*/React.createElement(Switch, {
    checked: paid,
    onChange: setPaid,
    label: "Offer product in addition to payment"
  }), /*#__PURE__*/React.createElement(Switch, {
    checked: usage,
    onChange: setUsage,
    label: "Request paid-ad usage rights (90 days)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      background: 'var(--gold-100)',
      borderRadius: 'var(--radius-md)',
      padding: '14px 16px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shield-check",
    size: 20,
    color: "var(--warning-600)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 14,
      color: 'var(--text-body)'
    }
  }, "Usage rights are agreed up front, so you know exactly what you can run."))), step === 3 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 300px',
      gap: 24,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 20,
      color: 'var(--ink-900)'
    }
  }, "Ready to publish"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 14.5,
      color: 'var(--text-muted)',
      marginTop: 8,
      lineHeight: 1.55
    }
  }, "Your first brief is free. Once published, matching creators can start applying right away."), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: '18px 0 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, ['3 creators · Beauty', 'Paid + product · usage rights', 'Deadline Aug 30, 2026'].map(t => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-ui)',
      fontSize: 14,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check-circle",
    size: 17,
    color: "var(--success-600)"
  }), t)))), /*#__PURE__*/React.createElement(BriefCard, {
    brand: "Bigens",
    title: "UGC for collagen launch",
    niche: "Beauty",
    reward: "Paid + product",
    deadline: "Aug 30",
    applicants: 0,
    brandLogo: `../../assets/imagery/ugc-beauty-collagen.jpg`,
    onApply: () => {},
    style: {
      width: '100%'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '18px 28px',
      borderTop: '1px solid var(--border-faint)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: step === 0 ? onClose : back
  }, step === 0 ? 'Cancel' : 'Back'), step < 3 ? /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: next,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    })
  }, "Continue") : /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onClose,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "rocket",
      size: 18
    })
  }, "Publish brief"))));
}
window.UGNewBrief = {
  NewBriefModal
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/newbrief.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/screens.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* UGConnect — Dashboard screens */
const {
  Button,
  Badge,
  Avatar,
  Tag,
  Card,
  Stat,
  Input,
  Textarea,
  Select,
  Switch,
  CreatorCard,
  BriefCard,
  Icon
} = window.UG;
const IMG = f => `../../assets/imagery/${f}`;
const BRIEFS = [{
  title: 'UGC for collagen launch',
  niche: 'Beauty · Supplements',
  reward: 'Paid + product',
  status: 'Active',
  tone: 'success',
  applicants: 12,
  deadline: '3 days left',
  cover: 'ugc-beauty-collagen.jpg',
  delivered: 2,
  total: 3,
  faces: ['ugc-creator-ringlight.jpg', 'ugc-supplement-portrait.jpg', 'ugc-lifestyle-coffee.jpg']
}, {
  title: 'Gym routine reels — protein',
  niche: 'Fitness',
  reward: '$95 / video',
  status: 'Active',
  tone: 'success',
  applicants: 8,
  deadline: '5 days left',
  cover: 'ugc-fitness-protein.jpg',
  delivered: 1,
  total: 4,
  faces: ['ugc-lifestyle-coffee.jpg', 'ugc-creator-ringlight.jpg']
}, {
  title: 'Skincare morning routine',
  niche: 'Skincare',
  reward: 'Product only',
  status: 'Draft',
  tone: 'neutral',
  applicants: 0,
  deadline: 'Not published',
  cover: 'ugc-skincare-set.jpg',
  delivered: 0,
  total: 2,
  faces: []
}];
const APPLICANTS = [{
  name: 'Lucia Marin',
  niche: 'Beauty · Skincare',
  avatar: 'ugc-creator-ringlight.jpg',
  rating: '4.9',
  applied: 'collagen launch',
  top: true
}, {
  name: 'Sofia Castro',
  niche: 'Skincare',
  avatar: 'ugc-supplement-portrait.jpg',
  rating: '5.0',
  applied: 'collagen launch'
}, {
  name: 'Diego Ruiz',
  niche: 'Fitness',
  avatar: 'ugc-lifestyle-coffee.jpg',
  rating: '4.8',
  applied: 'protein reels'
}];

/* Overlapping avatar stack */
function FaceStack({
  faces,
  size = 30,
  extra = 0
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, faces.map((f, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      marginLeft: i ? -10 : 0,
      width: size,
      height: size,
      borderRadius: '50%',
      overflow: 'hidden',
      boxShadow: '0 0 0 2.5px var(--white)',
      zIndex: faces.length - i
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG(f),
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }))), extra > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: -10,
      width: size,
      height: size,
      borderRadius: '50%',
      background: 'var(--purple-100)',
      color: 'var(--purple-700)',
      boxShadow: '0 0 0 2.5px var(--white)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: size * 0.34
    }
  }, "+", extra));
}

/* Deep-purple welcome band — the distinctive "marketplace control room" header */
function WelcomeBand({
  onNew
}) {
  const stats = [['3', 'active briefs'], ['18', 'new applications'], ['7', 'creators hired'], ['~4d', 'avg. delivery']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 'var(--radius-xl)',
      background: 'linear-gradient(120deg, var(--purple-800) 0%, var(--purple-600) 78%)',
      color: '#fff',
      padding: '30px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -120,
      right: -80,
      width: 380,
      height: 380,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(183,138,205,0.32), transparent 65%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 280
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 11.5,
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--purple-200)'
    }
  }, "Welcome back"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 34,
      letterSpacing: '-0.02em',
      lineHeight: 1.05,
      marginTop: 8
    }
  }, "Hello, Bigens"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 15,
      color: 'var(--purple-200)',
      marginTop: 8,
      maxWidth: 340
    }
  }, "You have ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#fff'
    }
  }, "18 new applications"), " waiting across your active briefs."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onNew,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 18
    }),
    style: {
      background: '#fff',
      color: 'var(--brand-primary)'
    }
  }, "New brief"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(FaceStack, {
    faces: ['ugc-creator-ringlight.jpg', 'ugc-supplement-portrait.jpg', 'ugc-lifestyle-coffee.jpg'],
    size: 32,
    extra: 15
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 13,
      color: 'var(--purple-200)'
    }
  }, "applied this week")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 30
    }
  }, stats.map(([v, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 30,
      lineHeight: 1
    }
  }, v), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 12.5,
      color: 'var(--purple-200)',
      marginTop: 5
    }
  }, l))))));
}

/* Rich active-brief card with cover, applicant faces and delivery progress */
function BriefTile({
  b,
  onOpen
}) {
  const pct = b.total ? Math.round(b.delivered / b.total * 100) : 0;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      padding: '14px',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--ring-card)',
      background: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 84,
      height: 84,
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      flex: '0 0 auto',
      background: 'var(--purple-50)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG(b.cover),
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 15,
      color: 'var(--text-strong)'
    }
  }, b.title), /*#__PURE__*/React.createElement(Badge, {
    tone: b.tone,
    dot: true,
    size: "sm"
  }, b.status)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 12.5,
      color: 'var(--text-muted)',
      marginTop: 3
    }
  }, b.niche, " \xB7 ", b.reward, " \xB7 ", b.deadline), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginTop: 12
    }
  }, b.faces.length > 0 ? /*#__PURE__*/React.createElement(FaceStack, {
    faces: b.faces.slice(0, 3),
    size: 26,
    extra: Math.max(0, b.applicants - 3)
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 12.5,
      color: 'var(--text-faint)'
    }
  }, "No applicants yet"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 60
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      borderRadius: 99,
      background: 'var(--purple-50)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct + '%',
      height: '100%',
      background: b.status === 'Draft' ? 'var(--ink-400)' : 'var(--brand-primary)',
      borderRadius: 99
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 11.5,
      color: 'var(--text-muted)',
      marginTop: 5
    }
  }, b.delivered, "/", b.total, " delivered")), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "sm",
    onClick: onOpen
  }, "Open"))));
}
function DashboardHome({
  onNew
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 36px',
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(WelcomeBand, {
    onNew: onNew
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr',
      gap: 22,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 19,
      color: 'var(--ink-900)'
    }
  }, "Active briefs"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    onClick: onNew,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 16
    })
  }, "New brief")), BRIEFS.map(b => /*#__PURE__*/React.createElement(BriefTile, {
    key: b.title,
    b: b,
    onOpen: () => {}
  }))), /*#__PURE__*/React.createElement(Card, {
    elevation: "sm",
    padding: "20px 22px"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 19,
      color: 'var(--ink-900)'
    }
  }, "Top applicants"), /*#__PURE__*/React.createElement(Badge, {
    tone: "brand",
    size: "sm"
  }, "18 new")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, APPLICANTS.map(a => /*#__PURE__*/React.createElement("div", {
    key: a.name,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px',
      borderRadius: 'var(--radius-md)',
      background: a.top ? 'var(--purple-50)' : 'transparent',
      boxShadow: a.top ? 'none' : '0 1px 0 var(--border-faint)'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: a.name,
    src: IMG(a.avatar),
    size: 44,
    ring: a.top
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 14.5,
      color: 'var(--text-strong)'
    }
  }, a.name), a.top && /*#__PURE__*/React.createElement(Badge, {
    tone: "reward",
    size: "sm"
  }, "Top pick")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 12,
      color: 'var(--text-muted)',
      marginTop: 1
    }
  }, a.niche, " \xB7 applied to ", a.applied)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 3,
      fontFamily: 'var(--font-ui)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "star",
    size: 13,
    color: "var(--gold-500)"
  }), a.rating)))), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    fullWidth: true,
    style: {
      marginTop: 16
    }
  }, "Review all applications"))));
}
function DiscoverScreen() {
  const niches = ['All', 'Beauty', 'Fitness', 'Skincare', 'Food', 'Tech', 'Fashion'];
  const [sel, setSel] = React.useState('All');
  const creators = [{
    name: 'Lucia Marin',
    handle: '@luciacreates',
    rating: '4.9',
    rate: 'from $90',
    verified: true,
    cover: 'ugc-beauty-collagen.jpg',
    avatar: 'ugc-creator-ringlight.jpg',
    niches: ['Beauty', 'Skincare']
  }, {
    name: 'Diego Ruiz',
    handle: '@diegofit',
    rating: '4.8',
    rate: 'from $75',
    verified: true,
    cover: 'ugc-fitness-protein.jpg',
    avatar: 'ugc-lifestyle-coffee.jpg',
    niches: ['Fitness', 'Sports']
  }, {
    name: 'Sofia Castro',
    handle: '@sofiabeauty',
    rating: '5.0',
    rate: 'from $110',
    verified: true,
    cover: 'ugc-skincare-set.jpg',
    avatar: 'ugc-supplement-portrait.jpg',
    niches: ['Skincare']
  }, {
    name: 'Mateo Vidal',
    handle: '@mateomakes',
    rating: '4.7',
    rate: 'from $80',
    verified: false,
    cover: 'ugc-bts-camera.jpg',
    avatar: 'ugc-lifestyle-coffee.jpg',
    niches: ['Tech', 'Lifestyle']
  }, {
    name: 'Valentina Cruz',
    handle: '@valeats',
    rating: '4.9',
    rate: 'from $85',
    verified: true,
    cover: 'ugc-collagen-kitchen.jpg',
    avatar: 'ugc-creator-ringlight.jpg',
    niches: ['Food', 'Beauty']
  }, {
    name: 'Andrés Soto',
    handle: '@andresbts',
    rating: '4.6',
    rate: 'from $70',
    verified: false,
    cover: 'ugc-bts-tripod.jpg',
    avatar: 'ugc-lifestyle-coffee.jpg',
    niches: ['Tech']
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '28px 36px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flexWrap: 'wrap',
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, niches.map(n => /*#__PURE__*/React.createElement(Tag, {
    key: n,
    selected: sel === n,
    onClick: () => setSel(n)
  }, n))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      width: 180
    }
  }, /*#__PURE__*/React.createElement(Select, {
    options: ['Top rated', 'Newest', 'Lowest rate'],
    value: "Top rated",
    onChange: () => {}
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
      gap: 20
    }
  }, creators.map(c => /*#__PURE__*/React.createElement(CreatorCard, _extends({
    key: c.name
  }, c, {
    cover: IMG(c.cover),
    avatar: IMG(c.avatar),
    onView: () => {},
    style: {
      width: '100%'
    }
  })))));
}
function EmptyScreen({
  icon,
  title,
  body
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '90px 36px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 76,
      height: 76,
      borderRadius: 'var(--radius-xl)',
      background: 'var(--purple-50)',
      color: 'var(--brand-primary)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 34
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 24,
      color: 'var(--ink-900)',
      marginTop: 22
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 15.5,
      color: 'var(--text-muted)',
      marginTop: 10,
      maxWidth: 380,
      lineHeight: 1.55
    }
  }, body));
}
window.UGDashScreens = {
  DashboardHome,
  DiscoverScreen,
  EmptyScreen,
  BRIEFS
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/dashboard/shell.jsx
try { (() => {
/* UGConnect — Dashboard shell: Sidebar + Topbar */
const {
  Button,
  Badge,
  Avatar,
  Icon
} = window.UG;
function DashLogo() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 22,
      letterSpacing: '-0.02em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brand-secondary)'
    }
  }, "UGC"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-900)'
    }
  }, "onnect"));
}
function Sidebar({
  active,
  onNav,
  onNew
}) {
  const items = [['home', 'Dashboard', 'layout-dashboard'], ['briefs', 'My briefs', 'list-checks'], ['discover', 'Discover creators', 'users'], ['messages', 'Messages', 'message-circle'], ['settings', 'Settings', 'settings']];
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      width: 252,
      flex: '0 0 auto',
      background: 'var(--white)',
      borderRight: '1px solid var(--border-faint)',
      display: 'flex',
      flexDirection: 'column',
      padding: '22px 16px',
      height: '100vh',
      position: 'sticky',
      top: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 8px 8px'
    }
  }, /*#__PURE__*/React.createElement(DashLogo, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 0'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    fullWidth: true,
    onClick: onNew,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 18
    })
  }, "New brief")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      marginTop: 8
    }
  }, items.map(([k, label, ic]) => {
    const on = active === k;
    return /*#__PURE__*/React.createElement("button", {
      key: k,
      onClick: () => onNav(k),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '11px 12px',
        borderRadius: 'var(--radius-md)',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left',
        width: '100%',
        fontFamily: 'var(--font-ui)',
        fontWeight: on ? 600 : 500,
        fontSize: 14.5,
        background: on ? 'var(--purple-50)' : 'transparent',
        color: on ? 'var(--brand-primary)' : 'var(--text-body)',
        transition: 'background var(--dur-fast) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 19,
      color: on ? 'var(--brand-primary)' : 'var(--ink-500)'
    }), label, k === 'messages' && /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 'auto',
        background: 'var(--brand-primary)',
        color: '#fff',
        fontSize: 11,
        fontWeight: 600,
        borderRadius: 999,
        padding: '1px 7px'
      }
    }, "3"));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      padding: '12px 8px',
      borderTop: '1px solid var(--border-faint)'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Bigens",
    size: 38
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--text-strong)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, "Bigens"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, "Brand \xB7 Beauty")), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 16,
    color: "var(--ink-400)",
    style: {
      marginLeft: 'auto'
    }
  })));
}
function Topbar({
  title,
  subtitle
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
      padding: '24px 36px',
      borderBottom: '1px solid var(--border-faint)',
      background: 'rgba(251,249,252,0.8)',
      backdropFilter: 'blur(10px)',
      position: 'sticky',
      top: 0,
      zIndex: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 26,
      letterSpacing: '-0.02em',
      color: 'var(--ink-900)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 14.5,
      color: 'var(--text-muted)',
      marginTop: 3
    }
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      background: 'var(--white)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-pill)',
      padding: '9px 16px',
      width: 240
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "search",
    size: 17,
    color: "var(--ink-400)"
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Search creators, briefs\u2026",
    style: {
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-ui)',
      fontSize: 14,
      width: '100%',
      color: 'var(--text-strong)'
    }
  })), /*#__PURE__*/React.createElement("button", {
    style: {
      width: 42,
      height: 42,
      borderRadius: '50%',
      border: '1px solid var(--border-subtle)',
      background: 'var(--white)',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "bell",
    size: 19,
    color: "var(--ink-700)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 9,
      right: 10,
      width: 8,
      height: 8,
      background: 'var(--danger-600)',
      borderRadius: '50%',
      border: '2px solid var(--white)'
    }
  })), /*#__PURE__*/React.createElement(Avatar, {
    name: "Bigens",
    size: 42,
    ring: true
  })));
}
window.UGDashShell = {
  Sidebar,
  Topbar,
  DashLogo
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/dashboard/shell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/app.jsx
try { (() => {
/* UGConnect — Landing page composition */
const {
  Nav,
  Hero,
  TrustBar,
  HowItWorks
} = window.UGLandingTop;
const {
  Creators,
  BriefShowcase,
  Pricing,
  FAQ,
  CreatorBand,
  Footer
} = window.UGLandingBottom;
function LandingPage() {
  const goBrief = () => {
    window.location.href = '../dashboard/index.html';
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement(Nav, {
    onBrief: goBrief
  }), /*#__PURE__*/React.createElement(Hero, {
    onBrief: goBrief
  }), /*#__PURE__*/React.createElement(TrustBar, null), /*#__PURE__*/React.createElement(HowItWorks, null), /*#__PURE__*/React.createElement(Creators, null), /*#__PURE__*/React.createElement(BriefShowcase, {
    onBrief: goBrief
  }), /*#__PURE__*/React.createElement(Pricing, {
    onBrief: goBrief
  }), /*#__PURE__*/React.createElement(FAQ, null), /*#__PURE__*/React.createElement(CreatorBand, null), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(LandingPage, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/sections1.jsx
try { (() => {
/* UGConnect — Landing sections (top): Nav, Hero, TrustBar, HowItWorks */
const {
  Button,
  Badge,
  Avatar,
  Tag,
  CreatorCard,
  BriefCard,
  StepCard,
  Icon
} = window.UG;
const MAX = 1180;
const wrap = {
  maxWidth: MAX,
  margin: '0 auto',
  padding: '0 28px'
};
function Logo({
  light = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 24,
      letterSpacing: '-0.02em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brand-secondary)'
    }
  }, "UGC"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: light ? '#fff' : 'var(--ink-900)'
    }
  }, "onnect"));
}
function Nav({
  onBrief
}) {
  const links = ['How it works', 'For creators', 'Pricing', 'FAQ'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(251,249,252,0.82)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border-faint)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      height: 72,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 36
    }
  }, /*#__PURE__*/React.createElement(Logo, null), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 26
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 14.5,
      fontWeight: 500,
      color: 'var(--text-body)',
      textDecoration: 'none'
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm"
  }, "Log in"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: onBrief,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16
    })
  }, "Start your first brief"))));
}
function AvatarStack() {
  const imgs = ['ugc-creator-ringlight.jpg', 'ugc-skincare-set.jpg', 'ugc-supplement-portrait.jpg', 'ugc-lifestyle-coffee.jpg'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, imgs.map((f, i) => /*#__PURE__*/React.createElement("span", {
    key: f,
    style: {
      marginLeft: i ? -12 : 0,
      width: 40,
      height: 40,
      borderRadius: '50%',
      overflow: 'hidden',
      boxShadow: '0 0 0 3px var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `../../assets/imagery/${f}`,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text-strong)'
    }
  }, "+90 creators"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, " ready to create")));
}
function Hero({
  onBrief
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -180,
      right: -120,
      width: 620,
      height: 620,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(136,82,162,0.18), transparent 65%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      paddingTop: 72,
      paddingBottom: 80,
      display: 'grid',
      gridTemplateColumns: '1.05fr 1fr',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '7px 14px',
      background: 'var(--white)',
      boxShadow: 'var(--shadow-sm)',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-ui)',
      fontSize: 12.5,
      fontWeight: 600,
      color: 'var(--brand-primary)',
      letterSpacing: '0.02em'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    size: 15
  }), " UGC marketplace"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(40px, 5vw, 60px)',
      lineHeight: 1.04,
      letterSpacing: '-0.03em',
      color: 'var(--ink-900)',
      marginTop: 22
    }
  }, "Authentic content", /*#__PURE__*/React.createElement("br", null), "for your brand."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 18.5,
      lineHeight: 1.55,
      color: 'var(--text-body)',
      marginTop: 20,
      maxWidth: 480
    }
  }, "Real UGC from real creators \u2014 without agencies or expensive productions. Post a brief, pick a creator, get content in days."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onBrief,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 19
    })
  }, "Start your first brief"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "play-circle",
      size: 19
    })
  }, "Book a demo")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 22,
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(AvatarStack, null), /*#__PURE__*/React.createElement("span", {
    style: {
      height: 28,
      width: 1,
      background: 'var(--border-subtle)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-ui)',
      fontSize: 14,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "badge-check",
    size: 18,
    color: "var(--success-600)"
  }), " Your first brief is free"))), /*#__PURE__*/React.createElement(HeroPreview, null)));
}
function HeroPreview() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 480
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 8,
      left: 10
    }
  }, /*#__PURE__*/React.createElement(CreatorCard, {
    name: "Lucia Marin",
    handle: "@luciacreates",
    verified: true,
    rating: "4.9",
    rate: "from $90",
    cover: "../../assets/imagery/ugc-beauty-collagen.jpg",
    avatar: "../../assets/imagery/ugc-creator-ringlight.jpg",
    niches: ['Beauty', 'Skincare'],
    onView: () => {},
    style: {
      width: 248
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0
    }
  }, /*#__PURE__*/React.createElement(BriefCard, {
    brand: "Bigens",
    title: "3 UGC videos for our collagen launch",
    niche: "Beauty \xB7 Supplements",
    reward: "Paid + product",
    deadline: "3 days left",
    applicants: 12,
    brandLogo: "../../assets/imagery/ugc-beauty-collagen.jpg",
    onApply: () => {},
    style: {
      width: 300
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 22,
      right: 18,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      background: 'var(--white)',
      boxShadow: 'var(--shadow-md)',
      borderRadius: 'var(--radius-pill)',
      padding: '10px 16px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: '50%',
      background: 'var(--success-100)',
      color: 'var(--success-600)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      display: 'block',
      color: 'var(--text-strong)'
    }
  }, "Content delivered"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)'
    }
  }, "in 4 days"))));
}
function TrustBar() {
  const cats = ['Beauty', 'Fitness', 'Food & drink', 'Skincare', 'Supplements', 'Fashion', 'Tech', 'Home'];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      borderTop: '1px solid var(--border-faint)',
      borderBottom: '1px solid var(--border-faint)',
      background: 'var(--white)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: '28px 28px',
      display: 'flex',
      alignItems: 'center',
      gap: 28,
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 13.5,
      fontWeight: 600,
      color: 'var(--text-muted)',
      letterSpacing: '0.02em'
    }
  }, "Creators ready across"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, cats.map(c => /*#__PURE__*/React.createElement("span", {
    key: c,
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 13.5,
      fontWeight: 500,
      color: 'var(--purple-700)',
      background: 'var(--purple-50)',
      padding: '7px 14px',
      borderRadius: 'var(--radius-pill)'
    }
  }, c)))));
}
function SectionHead({
  eyebrow,
  title,
  sub,
  center = true
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: center ? 'center' : 'left',
      maxWidth: center ? 640 : 'none',
      margin: center ? '0 auto' : 0
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--brand-secondary)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(30px, 3.5vw, 40px)',
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
      color: 'var(--ink-900)',
      marginTop: 12
    }
  }, title), sub && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 17,
      lineHeight: 1.55,
      color: 'var(--text-muted)',
      marginTop: 14
    }
  }, sub));
}
function HowItWorks() {
  const [tab, setTab] = React.useState('brands');
  const brands = [{
    icon: 'file-pen-line',
    title: 'Create a brief',
    body: 'Tell us your campaign, niche and budget. It takes about 2 minutes.'
  }, {
    icon: 'users',
    title: 'Pick your creators',
    body: 'Browse profiles and applications, then choose the right fit.'
  }, {
    icon: 'message-circle',
    title: 'Coordinate content',
    body: 'Align on the concept and deliverables directly in the platform.'
  }, {
    icon: 'rocket',
    title: 'Get UGC ready to use',
    body: 'Receive authentic content for your organic or paid campaigns.'
  }];
  const creators = [{
    icon: 'user',
    title: 'Create a profile',
    body: 'Show your style, niches and best sample work to brands.'
  }, {
    icon: 'inbox',
    title: 'Access real briefs',
    body: 'Browse live campaigns from brands looking for your content.'
  }, {
    icon: 'send',
    title: 'Apply to collaborate',
    body: 'Send an application in a tap — no agencies, no middlemen.'
  }, {
    icon: 'dollar-sign',
    title: 'Create & get rewarded',
    body: 'Deliver content and earn money, products or exposure.'
  }];
  const steps = tab === 'brands' ? brands : creators;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: '90px 28px'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "How it works",
    title: "From idea to authentic content",
    sub: "A simple, fast flow for both sides of the marketplace."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      background: 'var(--white)',
      boxShadow: 'var(--ring-card)',
      borderRadius: 'var(--radius-pill)',
      padding: 5
    }
  }, [['brands', 'For brands'], ['creators', 'For creators']].map(([k, label]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    onClick: () => setTab(k),
    style: {
      padding: '10px 22px',
      border: 'none',
      cursor: 'pointer',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 14.5,
      background: tab === k ? 'var(--brand-primary)' : 'transparent',
      color: tab === k ? '#fff' : 'var(--text-body)',
      transition: 'all var(--dur-base) var(--ease-out)'
    }
  }, label)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 28,
      marginTop: 50
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement(StepCard, {
    key: s.title,
    step: i + 1,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: s.icon,
      size: 22
    }),
    accent: tab === 'creators' ? 'reward' : 'brand',
    title: s.title
  }, s.body))));
}
window.UGLandingTop = {
  Nav,
  Hero,
  TrustBar,
  HowItWorks,
  SectionHead,
  Logo,
  wrap,
  MAX
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/sections1.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/sections2.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* UGConnect — Landing sections (bottom) */
const {
  Button,
  Badge,
  Avatar,
  Tag,
  CreatorCard,
  BriefCard,
  Input,
  Textarea,
  Select,
  Switch,
  Stat,
  Icon
} = window.UG;
const {
  SectionHead,
  wrap
} = window.UGLandingTop;
const CREATORS = [{
  name: 'Lucia Marin',
  handle: '@luciacreates',
  rating: '4.9',
  rate: 'from $90',
  verified: true,
  cover: 'ugc-beauty-collagen.jpg',
  avatar: 'ugc-creator-ringlight.jpg',
  niches: ['Beauty', 'Skincare']
}, {
  name: 'Diego Ruiz',
  handle: '@diegofit',
  rating: '4.8',
  rate: 'from $75',
  verified: true,
  cover: 'ugc-fitness-protein.jpg',
  avatar: 'ugc-lifestyle-coffee.jpg',
  niches: ['Fitness', 'Sports']
}, {
  name: 'Sofia Castro',
  handle: '@sofiabeauty',
  rating: '5.0',
  rate: 'from $110',
  verified: true,
  cover: 'ugc-skincare-set.jpg',
  avatar: 'ugc-supplement-portrait.jpg',
  niches: ['Skincare', 'Beauty']
}, {
  name: 'Mateo Vidal',
  handle: '@mateomakes',
  rating: '4.7',
  rate: 'from $80',
  verified: false,
  cover: 'ugc-bts-camera.jpg',
  avatar: 'ugc-lifestyle-coffee.jpg',
  niches: ['Tech', 'Lifestyle']
}];
function Creators() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--white)',
      borderTop: '1px solid var(--border-faint)',
      borderBottom: '1px solid var(--border-faint)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: '90px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    center: false,
    eyebrow: "The community",
    title: "Meet the creators",
    sub: "Browse profiles, sample work and rates before you commit."
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 17
    })
  }, "Explore all creators")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 22,
      marginTop: 46
    }
  }, CREATORS.map(c => /*#__PURE__*/React.createElement(CreatorCard, _extends({
    key: c.name
  }, c, {
    cover: `../../assets/imagery/${c.cover}`,
    avatar: `../../assets/imagery/${c.avatar}`,
    onView: () => {},
    style: {
      width: '100%'
    }
  }))))));
}
function BriefShowcase({
  onBrief
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: '90px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.05fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHead, {
    center: false,
    eyebrow: "For brands",
    title: "Post your first brief in minutes",
    sub: "No calls, no contracts to start. Describe what you need and creators come to you."
  }), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: '28px 0 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, [['file-pen-line', 'Describe your campaign, niche and budget'], ['users', 'Receive applications from matching creators'], ['shield-check', 'Approve content and usage rights you control']].map(([ic, t]) => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      fontFamily: 'var(--font-ui)',
      fontSize: 16,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-md)',
      background: 'var(--purple-50)',
      color: 'var(--brand-primary)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 19
  })), t))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 32
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onBrief,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 19
    })
  }, "Get your first brief free"))), /*#__PURE__*/React.createElement(BriefBuilderCard, null)));
}
function BriefBuilderCard() {
  const [paid, setPaid] = React.useState(true);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--white)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-lg)',
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 36,
      height: 36,
      borderRadius: 'var(--radius-md)',
      background: 'var(--brand-primary)',
      color: '#fff',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "file-pen-line",
    size: 18
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 18,
      color: 'var(--text-strong)'
    }
  }, "New brief")), /*#__PURE__*/React.createElement(Badge, {
    tone: "solid",
    size: "sm"
  }, "First one free")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Campaign title",
    value: "UGC for collagen launch",
    onChange: () => {}
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: "Niche",
    options: ['Beauty', 'Fitness', 'Food'],
    value: "Beauty",
    onChange: () => {}
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Budget / creator",
    value: "$120",
    onChange: () => {},
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "wallet",
      size: 17
    })
  })), /*#__PURE__*/React.createElement(Textarea, {
    label: "What do you need?",
    rows: 2,
    value: "3 vertical videos unboxing + first impressions.",
    onChange: () => {}
  }), /*#__PURE__*/React.createElement(Switch, {
    checked: paid,
    onChange: setPaid,
    label: "Offer product + payment"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    fullWidth: true
  }, "Publish brief")));
}
function Pricing({
  onBrief
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--brand-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -160,
      left: -100,
      width: 520,
      height: 520,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(183,138,205,0.22), transparent 65%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: '84px 28px',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--purple-300)'
    }
  }, "Simple & affordable"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(32px, 4vw, 46px)',
      lineHeight: 1.08,
      letterSpacing: '-0.02em',
      color: '#fff',
      marginTop: 14
    }
  }, "Your first brief is free."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 17.5,
      lineHeight: 1.55,
      color: 'var(--purple-200)',
      marginTop: 16,
      maxWidth: 460
    }
  }, "Try the marketplace with zero risk. Pay per campaign \u2014 only when you find a creator you love. No agencies, no retainers."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onBrief
  }, "Start your first brief"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    style: {
      color: '#fff'
    }
  }, "Book a demo"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(255,255,255,0.06)',
      border: '1px solid rgba(255,255,255,0.12)',
      borderRadius: 'var(--radius-xl)',
      padding: 30,
      backdropFilter: 'blur(6px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 26
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "+90",
    label: "creators ready",
    accent: "ink",
    style: {
      color: '#fff'
    }
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "Free",
    label: "your first brief",
    accent: "ink"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "~4 days",
    label: "avg. delivery",
    accent: "ink"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "0%",
    label: "agency markup",
    accent: "ink"
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 12.5,
      color: 'var(--purple-300)',
      marginTop: 22,
      lineHeight: 1.5
    }
  }, "Delivery and creator counts reflect current marketplace activity.")))));
}
function FAQ() {
  const items = [['Is my first brief really free?', 'Yes — you can post your first campaign and receive creator applications at no cost. You only pay when you choose a creator and launch.'], ['How fast do I get content?', 'Most campaigns deliver authentic UGC within a few days of approving a creator, depending on scope.'], ['Do I own the content?', 'You agree on usage rights up front in the brief — including paid-ad usage — so you know exactly what you can use and where.'], ['How do creators get paid?', 'Creators are rewarded with money, products or exposure, defined per brief. UGConnect keeps it transparent for both sides.'], ['Do I need an agency?', 'No. UGConnect connects you directly with creators — no agencies, retainers or expensive productions.']];
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: '90px 28px',
      maxWidth: 820
    }
  }, /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "FAQ",
    title: "Questions, answered"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, items.map(([q, a], i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: q,
      style: {
        background: 'var(--white)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: isOpen ? 'var(--shadow-sm)' : 'var(--ring-card)',
        overflow: 'hidden',
        transition: 'box-shadow var(--dur-base) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? -1 : i),
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        padding: '20px 24px',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 17,
        color: 'var(--text-strong)'
      }
    }, q), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: '0 0 auto',
        color: 'var(--brand-primary)',
        transform: isOpen ? 'rotate(180deg)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "chevron-down",
      size: 20
    }))), isOpen && /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-ui)',
        fontSize: 15.5,
        lineHeight: 1.6,
        color: 'var(--text-muted)',
        padding: '0 24px 22px',
        margin: 0
      }
    }, a));
  })));
}
function CreatorBand() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...wrap,
      padding: '0 28px 90px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 'var(--radius-2xl)',
      background: 'linear-gradient(120deg, var(--purple-600), var(--purple-500))',
      padding: '56px 56px',
      display: 'grid',
      gridTemplateColumns: '1.3fr 1fr',
      gap: 30,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 12,
      fontWeight: 600,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.75)'
    }
  }, "For creators"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(28px, 3.4vw, 38px)',
      lineHeight: 1.08,
      letterSpacing: '-0.02em',
      color: '#fff',
      marginTop: 12
    }
  }, "Got a phone and an audience?", /*#__PURE__*/React.createElement("br", null), "Turn your content into income."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 16.5,
      lineHeight: 1.55,
      color: 'rgba(255,255,255,0.85)',
      marginTop: 16,
      maxWidth: 460
    }
  }, "Join the community, access real brand briefs and get rewarded with money, products or exposure."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    size: "lg",
    style: {
      background: 'var(--brand-dark)'
    },
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 19
    })
  }, "Join as a creator"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    style: {
      color: '#fff',
      border: '1.5px solid rgba(255,255,255,0.4)'
    }
  }, "Find brand briefs"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      justifyContent: 'flex-end'
    }
  }, ['ugc-creator-ringlight.jpg', 'ugc-bts-tripod.jpg'].map((f, i) => /*#__PURE__*/React.createElement("span", {
    key: f,
    style: {
      width: 150,
      height: 230,
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      boxShadow: 'var(--shadow-lg)',
      transform: i ? 'translateY(20px)' : 'translateY(-8px)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `../../assets/imagery/${f}`,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }))))));
}
function Footer() {
  const cols = [['Product', ['How it works', 'For brands', 'For creators', 'Pricing']], ['Marketplace', ['Browse creators', 'Brand briefs', 'Categories', 'Success stories']], ['Company', ['About UGConnect', 'Careers', 'Blog', 'Contact']], ['Legal', ['Terms', 'Privacy', 'Usage rights', 'Cookies']]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--purple-900)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      padding: '64px 28px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr repeat(4, 1fr)',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 24,
      letterSpacing: '-0.02em'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--purple-300)'
    }
  }, "UGC"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#fff'
    }
  }, "onnect")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 14,
      lineHeight: 1.55,
      color: 'var(--purple-300)',
      marginTop: 14,
      maxWidth: 240
    }
  }, "Connect. Collaborate. Create. The marketplace for authentic, affordable UGC.")), cols.map(([title, links]) => /*#__PURE__*/React.createElement("div", {
    key: title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 12.5,
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--purple-200)'
    }
  }, title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: '16px 0 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 11
    }
  }, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 14,
      color: 'var(--purple-300)',
      textDecoration: 'none'
    }
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,0.1)',
      marginTop: 44,
      paddingTop: 22,
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 13,
      color: 'var(--purple-300)'
    }
  }, "\xA9 2026 UGConnect. All rights reserved."), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 13,
      color: 'var(--purple-300)'
    }
  }, "Made for brands & creators."))));
}
window.UGLandingBottom = {
  Creators,
  BriefShowcase,
  Pricing,
  FAQ,
  CreatorBand,
  Footer
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/sections2.jsx", error: String((e && e.message) || e) }); }

// ui_kits/uglib.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* AUTO-GENERATED for UI kits — mirrors components/** source.
   Loaded via <script type="text/babel">. Exposes window.UG.* */

// ===== Avatar.jsx =====

/**
 * UGConnect — Avatar
 * Round creator/brand avatar. Image or initials fallback on a purple tint.
 * Optional verified ring and online dot.
 */
function Avatar({
  src,
  name = '',
  size = 44,
  ring = false,
  status = null,
  style = {},
  ...rest
}) {
  const initials = name.split(' ').filter(Boolean).slice(0, 2).map(w => w[0].toUpperCase()).join('');
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-flex',
      width: size,
      height: size,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      overflow: 'hidden',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--purple-100)',
      color: 'var(--purple-700)',
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: size * 0.38,
      boxShadow: ring ? '0 0 0 2.5px var(--white), 0 0 0 4.5px var(--brand-primary)' : 'var(--ring-card)'
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials || '?'), status && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      width: size * 0.28,
      height: size * 0.28,
      borderRadius: '50%',
      background: status === 'online' ? 'var(--success-600)' : 'var(--ink-400)',
      border: '2px solid var(--white)'
    }
  }));
}

// ===== Badge.jsx =====

/**
 * UGConnect — Badge
 * Small status / category pill. Soft tinted fills, never used as body text.
 */
function Badge({
  children,
  tone = 'brand',
  size = 'md',
  dot = false,
  style = {},
  ...rest
}) {
  const tones = {
    brand: {
      bg: 'var(--purple-100)',
      fg: 'var(--purple-700)'
    },
    soft: {
      bg: 'var(--purple-50)',
      fg: 'var(--purple-600)'
    },
    neutral: {
      bg: 'var(--line-100)',
      fg: 'var(--ink-700)'
    },
    success: {
      bg: 'var(--success-100)',
      fg: 'var(--success-600)'
    },
    warning: {
      bg: 'var(--warning-100)',
      fg: 'var(--warning-600)'
    },
    danger: {
      bg: 'var(--danger-100)',
      fg: 'var(--danger-600)'
    },
    info: {
      bg: 'var(--info-100)',
      fg: 'var(--info-600)'
    },
    reward: {
      bg: 'var(--gold-100)',
      fg: 'var(--warning-600)'
    },
    solid: {
      bg: 'var(--brand-primary)',
      fg: 'var(--white)'
    }
  };
  const t = tones[tone] || tones.brand;
  const sz = size === 'sm' ? {
    padding: '3px 9px',
    fontSize: 11
  } : {
    padding: '5px 12px',
    fontSize: 12.5
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      background: t.bg,
      color: t.fg,
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      letterSpacing: '0.01em',
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      ...sz,
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'currentColor'
    }
  }), children);
}

// ===== Tag.jsx =====

/**
 * UGConnect — Tag
 * Selectable category chip (creator niches, brief filters). Outline by default,
 * filled purple when `selected`.
 */
function Tag({
  children,
  selected = false,
  onClick,
  removable = false,
  onRemove,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const interactive = !!onClick || removable;
  const base = selected ? {
    background: 'var(--brand-primary)',
    color: 'var(--white)',
    borderColor: 'var(--brand-primary)'
  } : {
    background: 'var(--white)',
    color: 'var(--text-body)',
    borderColor: 'var(--border-subtle)'
  };
  const hoverStyle = hover && !selected ? {
    borderColor: 'var(--border-strong)',
    background: 'var(--purple-50)'
  } : {};
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      padding: '7px 14px',
      fontFamily: 'var(--font-ui)',
      fontWeight: 500,
      fontSize: 13.5,
      border: '1.5px solid',
      borderRadius: 'var(--radius-pill)',
      cursor: interactive ? 'pointer' : 'default',
      userSelect: 'none',
      transition: 'all var(--dur-fast) var(--ease-out)',
      ...base,
      ...hoverStyle,
      ...style
    }
  }, rest), children, removable && /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove && onRemove();
    },
    style: {
      display: 'inline-flex',
      fontSize: 15,
      lineHeight: 1,
      opacity: 0.7,
      marginRight: -2
    }
  }, "\xD7"));
}

// ===== Button.jsx =====

/**
 * UGConnect — Button
 * Pill-shaped, Poppins SemiBold. Purple primary with soft brand glow on hover.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft = null,
  iconRight = null,
  fullWidth = false,
  disabled = false,
  type = 'button',
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: 13,
      gap: 6,
      icon: 16
    },
    md: {
      padding: '11px 22px',
      fontSize: 15,
      gap: 8,
      icon: 18
    },
    lg: {
      padding: '15px 30px',
      fontSize: 16,
      gap: 10,
      icon: 20
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: 'var(--brand-primary)',
      color: 'var(--text-on-brand)',
      border: '1.5px solid transparent'
    },
    secondary: {
      background: 'var(--purple-50)',
      color: 'var(--brand-primary)',
      border: '1.5px solid transparent'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-strong)',
      border: '1.5px solid var(--border-subtle)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-strong)',
      border: '1.5px solid transparent'
    },
    dark: {
      background: 'var(--brand-dark)',
      color: 'var(--text-on-brand)',
      border: '1.5px solid transparent'
    }
  };
  const v = variants[variant] || variants.primary;
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const hoverStyle = !disabled && hover ? {
    primary: {
      background: 'var(--brand-primary-hover)',
      boxShadow: 'var(--shadow-brand)'
    },
    secondary: {
      background: 'var(--purple-100)'
    },
    outline: {
      background: 'var(--purple-50)',
      borderColor: 'var(--border-strong)'
    },
    ghost: {
      background: 'var(--purple-50)'
    },
    dark: {
      background: 'var(--purple-900)'
    }
  }[variant] : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      padding: s.padding,
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: s.fontSize,
      lineHeight: 1,
      letterSpacing: '0.005em',
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transform: press && !disabled ? 'scale(0.97)' : 'scale(1)',
      transition: 'background var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
      whiteSpace: 'nowrap',
      ...v,
      ...hoverStyle,
      ...style
    }
  }, rest), iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: s.icon,
      height: s.icon
    }
  }, iconLeft), children, iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: s.icon,
      height: s.icon
    }
  }, iconRight));
}

// ===== Card.jsx =====

/**
 * UGConnect — Card
 * White surface on the lavender canvas: soft shadow, large radius, inset ring
 * instead of a hard border. Lifts gently on hover when `interactive`.
 */
function Card({
  children,
  interactive = false,
  padding = 'var(--space-5)',
  elevation = 'sm',
  style = {},
  onClick,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const shadows = {
    flat: 'var(--ring-card)',
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)'
  };
  const baseShadow = shadows[elevation] || shadows.sm;
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: interactive && hover ? 'var(--shadow-lg)' : baseShadow,
      padding,
      transform: interactive && hover ? 'translateY(-3px)' : 'translateY(0)',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
      cursor: interactive ? 'pointer' : 'default',
      ...style
    }
  }, rest), children);
}

// ===== Stat.jsx =====

/**
 * UGConnect — Stat
 * Big display number + label for trust signals ("+90 creators ready").
 */
function Stat({
  value,
  label,
  sublabel = null,
  align = 'left',
  accent = 'brand',
  style = {},
  ...rest
}) {
  const colors = {
    brand: 'var(--brand-primary)',
    dark: 'var(--brand-dark)',
    ink: 'var(--text-strong)'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      textAlign: align,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'clamp(32px, 4vw, 44px)',
      lineHeight: 1,
      letterSpacing: 'var(--tracking-tight)',
      color: colors[accent] || colors.brand
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 14.5,
      color: 'var(--text-strong)'
    }
  }, label), sublabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, sublabel));
}

// ===== Input.jsx =====

/**
 * UGConnect — Input
 * Labeled text field. 14px radius, hairline border, purple focus ring.
 */
function Input({
  label,
  hint,
  error,
  leadingIcon,
  value,
  onChange,
  placeholder,
  type = 'text',
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || `in-${Math.random().toString(36).slice(2, 8)}`;
  const borderColor = error ? 'var(--danger-600)' : focus ? 'var(--brand-primary)' : 'var(--border-subtle)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 500,
      fontSize: 13.5,
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      background: disabled ? 'var(--purple-50)' : 'var(--white)',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      padding: '0 14px',
      boxShadow: focus ? `0 0 0 4px var(--focus-ring)` : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)'
    }
  }, leadingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--text-muted)',
      width: 18,
      height: 18
    }
  }, leadingIcon), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-ui)',
      fontSize: 15,
      color: 'var(--text-strong)',
      padding: '12px 0'
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 12.5,
      color: error ? 'var(--danger-600)' : 'var(--text-muted)'
    }
  }, error || hint));
}

// ===== Textarea.jsx =====

/**
 * UGConnect — Textarea
 * Multiline field matching Input styling. Use for brief descriptions.
 */
function Textarea({
  label,
  hint,
  error,
  value,
  onChange,
  placeholder,
  rows = 4,
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || `ta-${Math.random().toString(36).slice(2, 8)}`;
  const borderColor = error ? 'var(--danger-600)' : focus ? 'var(--brand-primary)' : 'var(--border-subtle)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 500,
      fontSize: 13.5,
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: inputId,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    rows: rows,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 15,
      color: 'var(--text-strong)',
      background: disabled ? 'var(--purple-50)' : 'var(--white)',
      border: `1.5px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      padding: '12px 14px',
      resize: 'vertical',
      outline: 'none',
      boxShadow: focus ? `0 0 0 4px var(--focus-ring)` : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)',
      lineHeight: 1.5
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 12.5,
      color: error ? 'var(--danger-600)' : 'var(--text-muted)'
    }
  }, error || hint));
}

// ===== Select.jsx =====

/**
 * UGConnect — Select
 * Styled wrapper over a native <select> with a chevron. Matches Input.
 */
function Select({
  label,
  hint,
  value,
  onChange,
  options = [],
  placeholder,
  disabled = false,
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || `sel-${Math.random().toString(36).slice(2, 8)}`;
  const opts = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 500,
      fontSize: 13.5,
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: inputId,
    value: value,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      fontFamily: 'var(--font-ui)',
      fontSize: 15,
      color: value ? 'var(--text-strong)' : 'var(--text-faint)',
      background: disabled ? 'var(--purple-50)' : 'var(--white)',
      border: `1.5px solid ${focus ? 'var(--brand-primary)' : 'var(--border-subtle)'}`,
      borderRadius: 'var(--radius-md)',
      padding: '13px 40px 13px 14px',
      outline: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      boxShadow: focus ? `0 0 0 4px var(--focus-ring)` : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)'
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), opts.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("svg", {
    style: {
      position: 'absolute',
      right: 14,
      pointerEvents: 'none'
    },
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--text-muted)",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  }))), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, hint));
}

// ===== Checkbox.jsx =====

/**
 * UGConnect — Checkbox
 * Rounded checkbox with purple fill + check when selected.
 */
function Checkbox({
  checked = false,
  onChange,
  disabled = false,
  label,
  id,
  style = {},
  ...rest
}) {
  const inputId = id || `cb-${Math.random().toString(36).slice(2, 8)}`;
  const toggle = () => {
    if (!disabled && onChange) onChange(!checked);
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", _extends({
    role: "checkbox",
    "aria-checked": checked,
    id: inputId,
    onClick: toggle,
    style: {
      width: 20,
      height: 20,
      flex: '0 0 auto',
      borderRadius: 'var(--radius-xs)',
      background: checked ? 'var(--brand-primary)' : 'var(--white)',
      border: `1.5px solid ${checked ? 'var(--brand-primary)' : 'var(--border-subtle)'}`,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all var(--dur-fast) var(--ease-out)'
    }
  }, rest), checked && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "white",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 14.5,
      color: 'var(--text-strong)'
    }
  }, label));
}

// ===== Switch.jsx =====

/**
 * UGConnect — Switch
 * Pill toggle. Purple when on. Use for settings / opt-ins.
 */
function Switch({
  checked = false,
  onChange,
  disabled = false,
  label,
  id,
  style = {},
  ...rest
}) {
  const inputId = id || `sw-${Math.random().toString(36).slice(2, 8)}`;
  const toggle = () => {
    if (!disabled && onChange) onChange(!checked);
  };
  const control = /*#__PURE__*/React.createElement("span", _extends({
    role: "switch",
    "aria-checked": checked,
    id: inputId,
    onClick: toggle,
    style: {
      position: 'relative',
      width: 44,
      height: 26,
      flex: '0 0 auto',
      background: checked ? 'var(--brand-primary)' : 'var(--line-200)',
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'background var(--dur-base) var(--ease-out)'
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: checked ? 21 : 3,
      width: 20,
      height: 20,
      background: 'var(--white)',
      borderRadius: '50%',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--dur-base) var(--ease-spring)'
    }
  }));
  if (!label) return control;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    }
  }, control, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 14.5,
      color: 'var(--text-strong)'
    }
  }, label));
}

// ===== CreatorCard.jsx =====

/**
 * UGConnect — CreatorCard
 * Marketplace card for a creator: cover work, avatar, niches, rate.
 */
function CreatorCard({
  name,
  handle,
  avatar,
  cover,
  niches = [],
  rate,
  rating,
  verified = false,
  onView,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      overflow: 'hidden',
      transform: hover ? 'translateY(-4px)' : 'translateY(0)',
      transition: 'all var(--dur-base) var(--ease-out)',
      width: 260,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 150,
      background: 'var(--purple-100)'
    }
  }, cover && /*#__PURE__*/React.createElement("img", {
    src: cover,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), rate && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 12,
      right: 12
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "solid",
    size: "sm"
  }, rate))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 18px 18px',
      marginTop: -28
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    src: avatar,
    name: name,
    size: 56,
    ring: verified,
    style: {
      boxShadow: '0 0 0 4px var(--white)',
      borderRadius: '50%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      display: 'flex',
      alignItems: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 18,
      color: 'var(--text-strong)'
    }
  }, name), rating && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 3,
      fontFamily: 'var(--font-ui)',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "var(--gold-500)",
    stroke: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z"
  })), rating)), handle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 13,
      color: 'var(--text-muted)',
      marginTop: 2
    }
  }, handle), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6,
      marginTop: 12
    }
  }, niches.slice(0, 3).map(n => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 12,
      fontWeight: 500,
      color: 'var(--purple-700)',
      background: 'var(--purple-50)',
      padding: '4px 10px',
      borderRadius: 'var(--radius-pill)'
    }
  }, n))), /*#__PURE__*/React.createElement("button", {
    onClick: onView,
    style: {
      marginTop: 16,
      width: '100%',
      padding: '10px',
      cursor: 'pointer',
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 14,
      color: hover ? 'var(--white)' : 'var(--brand-primary)',
      background: hover ? 'var(--brand-primary)' : 'var(--purple-50)',
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      transition: 'all var(--dur-base) var(--ease-out)'
    }
  }, "View profile")));
}

// ===== BriefCard.jsx =====

/**
 * UGConnect — BriefCard
 * A brand campaign brief in the creator feed: brand, title, reward, meta, apply.
 */
function BriefCard({
  brand,
  brandLogo,
  title,
  niche,
  reward,
  deadline,
  applicants,
  rewardTone = 'reward',
  onApply,
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      padding: 'var(--space-5)',
      transform: hover ? 'translateY(-2px)' : 'translateY(0)',
      transition: 'all var(--dur-base) var(--ease-out)',
      width: 320,
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    src: brandLogo,
    name: brand,
    size: 36
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 14,
      color: 'var(--text-strong)'
    }
  }, brand), niche && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, niche))), reward && /*#__PURE__*/React.createElement(Badge, {
    tone: rewardTone,
    size: "sm"
  }, reward)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 18,
      lineHeight: 1.25,
      color: 'var(--text-strong)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18
    }
  }, deadline && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-ui)',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "12 7 12 12 15 14"
  })), deadline), applicants != null && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-ui)',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "15",
    height: "15",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "7",
    r: "4"
  })), applicants, " applied")), /*#__PURE__*/React.createElement("button", {
    onClick: onApply,
    style: {
      width: '100%',
      padding: '11px',
      cursor: 'pointer',
      marginTop: 2,
      fontFamily: 'var(--font-ui)',
      fontWeight: 600,
      fontSize: 14.5,
      color: 'var(--white)',
      background: hover ? 'var(--brand-primary-hover)' : 'var(--brand-primary)',
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      boxShadow: hover ? 'var(--shadow-brand)' : 'none',
      transition: 'all var(--dur-base) var(--ease-out)'
    }
  }, "Apply to brief"));
}

// ===== StepCard.jsx =====

/**
 * UGConnect — StepCard
 * Numbered "how it works" step with an icon. Use in brand/creator flows.
 */
function StepCard({
  step,
  icon,
  title,
  children,
  accent = 'brand',
  style = {}
}) {
  const accents = {
    brand: {
      bg: 'var(--purple-50)',
      fg: 'var(--brand-primary)'
    },
    dark: {
      bg: 'var(--purple-100)',
      fg: 'var(--brand-dark)'
    },
    reward: {
      bg: 'var(--gold-100)',
      fg: 'var(--warning-600)'
    }
  };
  const a = accents[accent] || accents.brand;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-md)',
      background: a.bg,
      color: a.fg,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, icon || /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 20
    }
  }, step)), icon && step != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 15,
      color: a.fg,
      letterSpacing: '0.04em'
    }
  }, "STEP ", step)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 19,
      color: 'var(--text-strong)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-ui)',
      fontSize: 14.5,
      lineHeight: 1.55,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, children));
}

/* ===== Inline icon set (Lucide-style, stroke 2, round caps) ===== */
const ICON_PATHS = {
  'arrow-right': '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
  'arrow-up-right': '<line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>',
  sparkles: '<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/>',
  search: '<circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>',
  check: '<polyline points="20 6 9 17 4 12"/>',
  'check-circle': '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>',
  clock: '<circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/>',
  users: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  user: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  'file-pen-line': '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="8" y1="13" x2="13" y2="13"/><line x1="8" y1="17" x2="11" y2="17"/>',
  wallet: '<path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4z"/>',
  star: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>',
  play: '<polygon points="6 4 20 12 6 20 6 4"/>',
  'play-circle': '<circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/>',
  menu: '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>',
  'chevron-down': '<polyline points="6 9 12 15 18 9"/>',
  'chevron-right': '<polyline points="9 18 15 12 9 6"/>',
  plus: '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
  zap: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
  'shield-check': '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>',
  'message-circle': '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z"/>',
  heart: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21l8.84-8.61a5.5 5.5 0 0 0 0-7.78z"/>',
  send: '<line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>',
  'layout-dashboard': '<rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/>',
  'list-checks': '<path d="M3 17l2 2 4-4"/><path d="M3 7l2 2 4-4"/><line x1="13" y1="6" x2="21" y2="6"/><line x1="13" y1="12" x2="21" y2="12"/><line x1="13" y1="18" x2="21" y2="18"/>',
  inbox: '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>',
  settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-2.82 1.17V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15H4.5a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 11 4.6V4.5a2 2 0 0 1 4 0v.09A1.65 1.65 0 0 0 18 6a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 11h.1a2 2 0 0 1 0 4h-.1z"/>',
  bell: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>',
  'badge-check': '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76z"/><polyline points="9 12 11 14 15 10"/>',
  rocket: '<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91 0z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>',
  image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>',
  'trending-up': '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>',
  'dollar-sign': '<line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
  'map-pin': '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
  filter: '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>'
};
function Icon({
  name,
  size = 20,
  strokeWidth = 2,
  color = 'currentColor',
  style = {}
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      display: 'block',
      flex: '0 0 auto',
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: ICON_PATHS[name] || ''
    }
  });
}
window.UG = {
  Avatar,
  Badge,
  Tag,
  Button,
  Card,
  Stat,
  Input,
  Textarea,
  Select,
  Checkbox,
  Switch,
  CreatorCard,
  BriefCard,
  StepCard,
  Icon
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/uglib.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.BriefCard = __ds_scope.BriefCard;

__ds_ns.CreatorCard = __ds_scope.CreatorCard;

__ds_ns.StepCard = __ds_scope.StepCard;

})();
