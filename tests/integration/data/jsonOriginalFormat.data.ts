export default {
  sizes: {
    32: {
      category: 'size',
      exportKey: 'size',
      comment: '32.72px spacer component',
      value: 32.72,
      type: 'number',
      unit: 'pixel'
    },
    40: {
      category: 'size',
      exportKey: 'size',
      value: 40,
      type: 'number',
      unit: 'pixel'
    },
    60: {
      category: 'size',
      exportKey: 'size',
      value: 60,
      type: 'number',
      unit: 'pixel'
    },
    80: {
      category: 'size',
      exportKey: 'size',
      value: 80,
      type: 'number',
      unit: 'pixel'
    },
    'plain token': {
      category: 'size',
      exportKey: 'size',
      value: 200,
      type: 'number',
      unit: 'pixel'
    },
    'token in frame': {
      category: 'size',
      exportKey: 'size',
      value: 200,
      type: 'number',
      unit: 'pixel'
    },
    'token in group': {
      category: 'size',
      exportKey: 'size',
      value: 200,
      type: 'number',
      unit: 'pixel'
    },
    'in variant 60': {
      category: 'size',
      exportKey: 'size',
      value: 60,
      type: 'number',
      unit: 'pixel'
    },
    'in variant 90': {
      category: 'size',
      exportKey: 'size',
      value: 90,
      type: 'number',
      unit: 'pixel'
    },
    'in variant 120': {
      category: 'size',
      exportKey: 'size',
      value: 120,
      type: 'number',
      unit: 'pixel'
    },
    frame: {
      category: 'size',
      exportKey: 'size',
      value: 32,
      type: 'number',
      unit: 'pixel'
    },
    rect: {
      category: 'size',
      exportKey: 'size',
      value: 32,
      type: 'number',
      unit: 'pixel'
    },
    'shape in component': {
      category: 'size',
      exportKey: 'size',
      comment: 'Should use 32px not 20 from inside shape',
      value: 32,
      type: 'number',
      unit: 'pixel'
    }
  },
  spacing: {
    10: {
      category: 'spacing',
      exportKey: 'spacing',
      top: {
        value: 10,
        type: 'number',
        unit: 'pixel'
      },
      right: {
        value: 10,
        type: 'number',
        unit: 'pixel'
      },
      bottom: {
        value: 10,
        type: 'number',
        unit: 'pixel'
      },
      left: {
        value: 10,
        type: 'number',
        unit: 'pixel'
      }
    },
    mixed: {
      category: 'spacing',
      exportKey: 'spacing',
      top: {
        value: 10,
        type: 'number',
        unit: 'pixel'
      },
      right: {
        value: 20,
        type: 'number',
        unit: 'pixel'
      },
      bottom: {
        value: 30,
        type: 'number',
        unit: 'pixel'
      },
      left: {
        value: 20,
        type: 'number',
        unit: 'pixel'
      }
    },
    top: {
      category: 'spacing',
      exportKey: 'spacing',
      top: {
        value: 10,
        type: 'number',
        unit: 'pixel'
      },
      right: {
        value: 0,
        type: 'number',
        unit: 'pixel'
      },
      bottom: {
        value: 0,
        type: 'number',
        unit: 'pixel'
      },
      left: {
        value: 0,
        type: 'number',
        unit: 'pixel'
      }
    }
  },
  borders: {
    single: {
      category: 'border',
      exportKey: 'border',
      strokeAlign: {
        value: 'inside',
        type: 'string'
      },
      dashPattern: {
        value: '',
        type: 'string'
      },
      strokeCap: {
        value: 'none',
        type: 'string'
      },
      strokeJoin: {
        value: 'miter',
        type: 'string'
      },
      strokeMiterLimit: {
        value: 4,
        type: 'number',
        unit: 'degree'
      },
      strokeWeight: {
        value: 5,
        type: 'number',
        unit: 'pixel'
      },
      stroke: {
        value: 'rgba(0, 0, 0, 1)',
        type: 'color'
      }
    },
    'dashed outside': {
      category: 'border',
      exportKey: 'border',
      strokeAlign: {
        value: 'outside',
        type: 'string'
      },
      dashPattern: {
        value: '5, 5, 3, 3',
        type: 'string'
      },
      strokeCap: {
        value: 'none',
        type: 'string'
      },
      strokeJoin: {
        value: 'miter',
        type: 'string'
      },
      strokeMiterLimit: {
        value: 4,
        type: 'number',
        unit: 'degree'
      },
      strokeWeight: {
        value: 5,
        type: 'number',
        unit: 'pixel'
      },
      stroke: {
        value: 'rgba(0, 0, 0, 1)',
        type: 'color'
      }
    },
    'single (style)': {
      category: 'border',
      exportKey: 'border',
      strokeAlign: {
        value: 'inside',
        type: 'string'
      },
      dashPattern: {
        value: '',
        type: 'string'
      },
      strokeCap: {
        value: 'none',
        type: 'string'
      },
      strokeJoin: {
        value: 'miter',
        type: 'string'
      },
      strokeMiterLimit: {
        value: 4,
        type: 'number',
        unit: 'degree'
      },
      strokeWeight: {
        value: 5,
        type: 'number',
        unit: 'pixel'
      },
      stroke: {
        value: 'rgba(4, 74, 255, 1)',
        type: 'color'
      }
    },
    unsupported: {
      'multiple borders': {
        category: 'border',
        exportKey: 'border',
        strokeAlign: {
          value: 'inside',
          type: 'string'
        },
        dashPattern: {
          value: '5, 10',
          type: 'string'
        },
        strokeCap: {
          value: 'none',
          type: 'string'
        },
        strokeJoin: {
          value: 'miter',
          type: 'string'
        },
        strokeMiterLimit: {
          value: 4,
          type: 'number',
          unit: 'degree'
        },
        strokeWeight: {
          value: 5,
          type: 'number',
          unit: 'pixel'
        },
        stroke: {
          value: 'rgba(255, 230, 0, 1)',
          type: 'color'
        }
      }
    }
  },
  radius: {
    5: {
      category: 'radius',
      exportKey: 'radius',
      radius: {
        value: 5,
        type: 'number',
        unit: 'pixel'
      },
      radiusType: {
        value: 'single',
        type: 'string'
      },
      radii: {
        topLeft: {
          value: 5,
          type: 'number',
          unit: 'pixel'
        },
        topRight: {
          value: 5,
          type: 'number',
          unit: 'pixel'
        },
        bottomRight: {
          value: 5,
          type: 'number',
          unit: 'pixel'
        },
        bottomLeft: {
          value: 5,
          type: 'number',
          unit: 'pixel'
        }
      },
      smoothing: {
        value: 0,
        type: 'number'
      }
    }
  },
  radii: {
    mixed: {
      category: 'radius',
      exportKey: 'radius',
      radiusType: {
        value: 'mixed',
        type: 'string'
      },
      radii: {
        topLeft: {
          value: 5.5,
          type: 'number',
          unit: 'pixel'
        },
        topRight: {
          value: 10,
          type: 'number',
          unit: 'pixel'
        },
        bottomRight: {
          value: 15,
          type: 'number',
          unit: 'pixel'
        },
        bottomLeft: {
          value: 20,
          type: 'number',
          unit: 'pixel'
        }
      },
      smoothing: {
        value: 0,
        type: 'number'
      }
    },
    smoothing: {
      category: 'radius',
      exportKey: 'radius',
      radius: {
        value: 10,
        type: 'number',
        unit: 'pixel'
      },
      radiusType: {
        value: 'single',
        type: 'string'
      },
      radii: {
        topLeft: {
          value: 10,
          type: 'number',
          unit: 'pixel'
        },
        topRight: {
          value: 10,
          type: 'number',
          unit: 'pixel'
        },
        bottomRight: {
          value: 10,
          type: 'number',
          unit: 'pixel'
        },
        bottomLeft: {
          value: 10,
          type: 'number',
          unit: 'pixel'
        }
      },
      smoothing: {
        value: 0.75,
        type: 'number'
      }
    }
  },
  motion: {
    'move in': {
      category: 'motion',
      exportKey: 'motion',
      type: {
        value: 'move_in',
        type: 'string'
      },
      duration: {
        value: 0.5,
        type: 'number',
        unit: 's'
      },
      easing: {
        value: 'ease-in',
        type: 'string'
      },
      easingFunction: {
        x1: {
          value: 0.41999998688697815,
          type: 'number'
        },
        x2: {
          value: 1,
          type: 'number'
        },
        y1: {
          value: 0,
          type: 'number'
        },
        y2: {
          value: 1,
          type: 'number'
        }
      },
      direction: {
        value: 'left',
        type: 'string'
      }
    },
    dissolve: {
      category: 'motion',
      exportKey: 'motion',
      type: {
        value: 'dissolve',
        type: 'string'
      },
      duration: {
        value: 0.45,
        type: 'number',
        unit: 's'
      },
      easing: {
        value: 'cubic-bezier',
        type: 'string'
      },
      easingFunction: {
        x1: {
          value: 0.6968395709991455,
          type: 'number'
        },
        x2: {
          value: 0.06683959811925888,
          type: 'number'
        },
        y1: {
          value: 0.052326660603284836,
          type: 'number'
        },
        y2: {
          value: 0.9323266744613647,
          type: 'number'
        }
      }
    },
    smart: {
      category: 'motion',
      exportKey: 'motion',
      type: {
        value: 'smart_animate',
        type: 'string'
      },
      duration: {
        value: 0.5,
        type: 'number',
        unit: 's'
      },
      easing: {
        value: 'linear',
        type: 'string'
      },
      easingFunction: {
        x1: {
          value: 0,
          type: 'number'
        },
        x2: {
          value: 1,
          type: 'number'
        },
        y1: {
          value: 0,
          type: 'number'
        },
        y2: {
          value: 1,
          type: 'number'
        }
      }
    },
    push: {
      category: 'motion',
      exportKey: 'motion',
      type: {
        value: 'push',
        type: 'string'
      },
      duration: {
        value: 0.5,
        type: 'number',
        unit: 's'
      },
      easing: {
        value: 'ease-in-back',
        type: 'string'
      },
      easingFunction: {
        x1: {
          value: 0.30000001192092896,
          type: 'number'
        },
        x2: {
          value: 0.699999988079071,
          type: 'number'
        },
        y1: {
          value: -0.05000000074505806,
          type: 'number'
        },
        y2: {
          value: -0.5,
          type: 'number'
        }
      },
      direction: {
        value: 'left',
        type: 'string'
      }
    }
  },
  breakpoints: {
    lg: {
      category: 'breakpoint',
      exportKey: 'breakpoint',
      type: 'number',
      unit: 'pixel',
      value: 1280
    },
    md: {
      category: 'breakpoint',
      exportKey: 'breakpoint',
      type: 'number',
      unit: 'pixel',
      value: 1024
    },
    sm: {
      category: 'breakpoint',
      exportKey: 'breakpoint',
      type: 'number',
      unit: 'pixel',
      value: 768
    }
  },
  opacities: {
    'button-disabled': {
      value: 0.3,
      type: 'number'
    }
  },
  color: {
    colors: {
      'multiple fills': {
        0: {
          value: 'rgba(64, 255, 186, 1)',
          type: 'color'
        },
        1: {
          value: 'rgba(0, 0, 0, 0.1)',
          type: 'color'
        },
        category: 'color',
        exportKey: 'color'
      },
      'single blue': {
        category: 'color',
        exportKey: 'color',
        value: 'rgba(4, 74, 255, 1)',
        type: 'color'
      },
      'ref blue': {
        category: 'color',
        comment: 'Some other description',
        exportKey: 'color',
        type: 'color',
        value: 'rgba(4, 74, 255, 1)'
      },
      'special characters': {
        '😅': {
          category: 'color',
          exportKey: 'color',
          comment: 'Emoji',
          value: 'rgba(64, 223, 80, 1)',
          type: 'color'
        },
        änderung: {
          category: 'color',
          exportKey: 'color',
          value: 'rgba(52, 86, 175, 1)',
          type: 'color'
        }
      }
    },
    dark: {
      background: {
        category: 'color',
        exportKey: 'color',
        type: 'color',
        value: 'rgba(0, 0, 0, 1)'
      }
    },
    light: {
      background: {
        category: 'color',
        exportKey: 'color',
        type: 'color',
        value: 'rgba(255, 255, 255, 1)'
      }
    }
  },
  gradient: {
    gradient: {
      multiple: {
        0: {
          gradientType: {
            value: 'linear',
            type: 'string'
          },
          stops: {
            0: {
              position: {
                value: 0,
                type: 'number'
              },
              color: {
                value: 'rgba(255, 184, 0, 1)',
                type: 'color'
              }
            },
            1: {
              position: {
                value: 1,
                type: 'number'
              },
              color: {
                value: 'rgba(255, 184, 0, 1)',
                type: 'color'
              }
            }
          },
          opacity: {
            value: 1,
            type: 'number'
          },
          rotation: {
            type: 'number',
            unit: 'degree',
            value: 180
          }
        },
        1: {
          gradientType: {
            value: 'radial',
            type: 'string'
          },
          stops: {
            0: {
              position: {
                value: 0,
                type: 'number'
              },
              color: {
                value: 'rgba(255, 255, 255, 1)',
                type: 'color'
              }
            },
            1: {
              position: {
                value: 1,
                type: 'number'
              },
              color: {
                value: 'rgba(255, 255, 255, 1)',
                type: 'color'
              }
            }
          },
          opacity: {
            value: 1,
            type: 'number'
          },
          rotation: {
            type: 'number',
            unit: 'degree',
            value: 180
          }
        },
        2: {
          gradientType: {
            value: 'angular',
            type: 'string'
          },
          stops: {
            0: {
              position: {
                value: 0,
                type: 'number'
              },
              color: {
                value: 'rgba(207, 48, 48, 1)',
                type: 'color'
              }
            },
            1: {
              position: {
                value: 1,
                type: 'number'
              },
              color: {
                value: 'rgba(255, 255, 255, 1)',
                type: 'color'
              }
            }
          },
          opacity: {
            value: 1,
            type: 'number'
          },
          rotation: {
            type: 'number',
            unit: 'degree',
            value: 180
          }
        },
        3: {
          gradientType: {
            value: 'diamond',
            type: 'string'
          },
          stops: {
            0: {
              position: {
                value: 0,
                type: 'number'
              },
              color: {
                value: 'rgba(74, 79, 204, 1)',
                type: 'color'
              }
            },
            1: {
              position: {
                value: 1,
                type: 'number'
              },
              color: {
                value: 'rgba(255, 255, 255, 1)',
                type: 'color'
              }
            }
          },
          opacity: {
            value: 1,
            type: 'number'
          },
          rotation: {
            type: 'number',
            unit: 'degree',
            value: 180
          }
        },
        category: 'gradient',
        exportKey: 'gradient'
      },
      'single with multiple color stops': {
        category: 'gradient',
        exportKey: 'gradient',
        comment: 'Four color stops from yellow to red',
        gradientType: {
          value: 'radial',
          type: 'string'
        },
        stops: {
          0: {
            position: {
              value: 0,
              type: 'number'
            },
            color: {
              value: 'rgba(255, 184, 0, 1)',
              type: 'color'
            }
          },
          1: {
            position: {
              value: 0.34,
              type: 'number'
            },
            color: {
              value: 'rgba(255, 138, 0, 1)',
              type: 'color'
            }
          },
          2: {
            position: {
              value: 0.65,
              type: 'number'
            },
            color: {
              value: 'rgba(255, 46, 0, 1)',
              type: 'color'
            }
          },
          3: {
            position: {
              value: 1,
              type: 'number'
            },
            color: {
              value: 'rgba(255, 0, 0, 1)',
              type: 'color'
            }
          }
        },
        opacity: {
          value: 1,
          type: 'number'
        },
        rotation: {
          type: 'number',
          unit: 'degree',
          value: 180
        }
      }
    }
  },
  grid: {
    multiple: {
      0: {
        pattern: {
          value: 'columns',
          type: 'string'
        },
        sectionSize: {
          value: 1,
          type: 'number',
          unit: 'pixel'
        },
        gutterSize: {
          value: 20,
          type: 'number',
          unit: 'pixel'
        },
        alignment: {
          value: 'max',
          type: 'string'
        },
        count: {
          value: 7,
          type: 'number'
        },
        offset: {
          value: 3,
          type: 'number',
          unit: 'pixel'
        }
      },
      1: {
        pattern: {
          value: 'columns',
          type: 'string'
        },
        sectionSize: {
          value: 12,
          type: 'number',
          unit: 'pixel'
        },
        gutterSize: {
          value: 20,
          type: 'number',
          unit: 'pixel'
        },
        alignment: {
          value: 'center',
          type: 'string'
        },
        count: {
          value: 6,
          type: 'number'
        }
      },
      2: {
        pattern: {
          value: 'columns',
          type: 'string'
        },
        gutterSize: {
          value: 20,
          type: 'number',
          unit: 'pixel'
        },
        alignment: {
          value: 'stretch',
          type: 'string'
        },
        count: {
          value: 5,
          type: 'number'
        },
        offset: {
          value: 10,
          type: 'number',
          unit: 'pixel'
        }
      },
      3: {
        pattern: {
          value: 'columns',
          type: 'string'
        },
        sectionSize: {
          value: 34,
          type: 'number',
          unit: 'pixel'
        },
        gutterSize: {
          value: 20,
          type: 'number',
          unit: 'pixel'
        },
        alignment: {
          value: 'min',
          type: 'string'
        },
        count: {
          value: 4,
          type: 'number'
        },
        offset: {
          value: 13,
          type: 'number',
          unit: 'pixel'
        }
      },
      4: {
        pattern: {
          value: 'rows',
          type: 'string'
        },
        sectionSize: {
          value: 8,
          type: 'number',
          unit: 'pixel'
        },
        gutterSize: {
          value: 20,
          type: 'number',
          unit: 'pixel'
        },
        alignment: {
          value: 'max',
          type: 'string'
        },
        count: {
          value: 5,
          type: 'number'
        },
        offset: {
          value: 10,
          type: 'number',
          unit: 'pixel'
        }
      },
      5: {
        pattern: {
          value: 'rows',
          type: 'string'
        },
        sectionSize: {
          value: 8,
          type: 'number',
          unit: 'pixel'
        },
        gutterSize: {
          value: 10,
          type: 'number',
          unit: 'pixel'
        },
        alignment: {
          value: 'center',
          type: 'string'
        },
        count: {
          value: 4,
          type: 'number'
        }
      },
      6: {
        pattern: {
          value: 'rows',
          type: 'string'
        },
        sectionSize: {
          value: 8,
          type: 'number',
          unit: 'pixel'
        },
        gutterSize: {
          value: 20,
          type: 'number',
          unit: 'pixel'
        },
        alignment: {
          value: 'min',
          type: 'string'
        },
        count: {
          value: 3,
          type: 'number'
        },
        offset: {
          value: 10,
          type: 'number',
          unit: 'pixel'
        }
      },
      7: {
        pattern: {
          value: 'grid',
          type: 'string'
        },
        sectionSize: {
          value: 8,
          type: 'number',
          unit: 'pixel'
        }
      },
      category: 'grid',
      exportKey: 'grid',
      comment: 'Grid / multiple description text'
    },
    single: {
      category: 'grid',
      exportKey: 'grid',
      pattern: {
        value: 'columns',
        type: 'string'
      },
      sectionSize: {
        value: 11,
        type: 'number',
        unit: 'pixel'
      },
      gutterSize: {
        value: 20,
        type: 'number',
        unit: 'pixel'
      },
      alignment: {
        value: 'center',
        type: 'string'
      },
      count: {
        value: 5,
        type: 'number'
      }
    }
  },
  invalid: {
    'no grid': {
      category: 'grid',
      exportKey: 'grid'
    },
    none: {
      category: 'effect',
      exportKey: 'effect',
      comment: 'Effect without effect'
    }
  },
  font: {
    body: {
      h3: {
        category: 'font',
        exportKey: 'font',
        comment: 'Comment for text style',
        fontSize: {
          value: 20,
          type: 'number',
          unit: 'pixel'
        },
        textDecoration: {
          value: 'none',
          type: 'string'
        },
        fontFamily: {
          value: 'Akzidenz-Grotesk Pro',
          type: 'string'
        },
        fontWeight: {
          value: 700,
          type: 'number'
        },
        fontStyle: {
          value: 'normal',
          type: 'string'
        },
        fontStretch: {
          value: 'condensed',
          type: 'string'
        },
        _fontStyleOld: {
          value: 'Bold Condensed',
          type: 'string'
        },
        letterSpacing: {
          value: 2,
          type: 'number',
          unit: 'percent'
        },
        lineHeight: {
          value: 160,
          type: 'number',
          unit: 'percent'
        },
        paragraphIndent: {
          value: 5,
          type: 'number',
          unit: 'pixel'
        },
        paragraphSpacing: {
          value: 8,
          type: 'number',
          unit: 'pixel'
        },
        textCase: {
          value: 'uppercase',
          type: 'string'
        }
      },
      'h4 strike through': {
        category: 'font',
        exportKey: 'font',
        comment: 'With stylisitc options',
        fontSize: {
          value: 16,
          type: 'number',
          unit: 'pixel'
        },
        textDecoration: {
          value: 'line-through',
          type: 'string'
        },
        fontFamily: {
          value: 'Roboto',
          type: 'string'
        },
        fontWeight: {
          value: 500,
          type: 'number'
        },
        fontStyle: {
          value: 'italic',
          type: 'string'
        },
        fontStretch: {
          value: 'normal',
          type: 'string'
        },
        _fontStyleOld: {
          value: 'Medium Italic',
          type: 'string'
        },
        letterSpacing: {
          value: 0,
          type: 'number',
          unit: 'percent'
        },
        lineHeight: {
          value: 'normal',
          type: 'string',
          unit: 'auto'
        },
        paragraphIndent: {
          value: 0,
          type: 'number',
          unit: 'pixel'
        },
        paragraphSpacing: {
          value: 0,
          type: 'number',
          unit: 'pixel'
        },
        textCase: {
          value: 'none',
          type: 'string'
        }
      },
      italic: {
        category: 'font',
        exportKey: 'font',
        fontSize: {
          value: 12,
          type: 'number',
          unit: 'pixel'
        },
        textDecoration: {
          value: 'none',
          type: 'string'
        },
        fontFamily: {
          value: 'Roboto',
          type: 'string'
        },
        fontWeight: {
          value: 400,
          type: 'number'
        },
        fontStyle: {
          value: 'italic',
          type: 'string'
        },
        fontStretch: {
          value: 'normal',
          type: 'string'
        },
        _fontStyleOld: {
          value: 'Italic',
          type: 'string'
        },
        letterSpacing: {
          value: 0,
          type: 'number',
          unit: 'percent'
        },
        lineHeight: {
          value: 14,
          type: 'number',
          unit: 'pixel'
        },
        paragraphIndent: {
          value: 0,
          type: 'number',
          unit: 'pixel'
        },
        paragraphSpacing: {
          value: 0,
          type: 'number',
          unit: 'pixel'
        },
        textCase: {
          value: 'none',
          type: 'string'
        }
      },
      'extra bold condensed italic': {
        category: 'font',
        exportKey: 'font',
        fontSize: {
          value: 12,
          type: 'number',
          unit: 'pixel'
        },
        textDecoration: {
          value: 'none',
          type: 'string'
        },
        fontFamily: {
          value: 'Akzidenz-Grotesk Pro',
          type: 'string'
        },
        fontWeight: {
          value: 800,
          type: 'number'
        },
        fontStyle: {
          value: 'italic',
          type: 'string'
        },
        fontStretch: {
          value: 'condensed',
          type: 'string'
        },
        _fontStyleOld: {
          value: 'Extra Bold Condensed Italic',
          type: 'string'
        },
        letterSpacing: {
          value: 0,
          type: 'number',
          unit: 'percent'
        },
        lineHeight: {
          value: 'normal',
          type: 'string',
          unit: 'auto'
        },
        paragraphIndent: {
          value: 0,
          type: 'number',
          unit: 'pixel'
        },
        paragraphSpacing: {
          value: 0,
          type: 'number',
          unit: 'pixel'
        },
        textCase: {
          value: 'none',
          type: 'string'
        }
      },
      'medium extended italic': {
        category: 'font',
        exportKey: 'font',
        fontSize: {
          value: 20,
          type: 'number',
          unit: 'pixel'
        },
        textDecoration: {
          value: 'none',
          type: 'string'
        },
        fontFamily: {
          value: 'Akzidenz-Grotesk Pro',
          type: 'string'
        },
        fontWeight: {
          value: 500,
          type: 'number'
        },
        fontStyle: {
          value: 'italic',
          type: 'string'
        },
        fontStretch: {
          value: 'expanded',
          type: 'string'
        },
        _fontStyleOld: {
          value: 'Medium Extended Italic',
          type: 'string'
        },
        letterSpacing: {
          value: 0,
          type: 'number',
          unit: 'percent'
        },
        lineHeight: {
          value: 'normal',
          type: 'string',
          unit: 'auto'
        },
        paragraphIndent: {
          value: 0,
          type: 'number',
          unit: 'pixel'
        },
        paragraphSpacing: {
          value: 0,
          type: 'number',
          unit: 'pixel'
        },
        textCase: {
          value: 'none',
          type: 'string'
        }
      },
      super: {
        category: 'font',
        exportKey: 'font',
        fontSize: {
          value: 22,
          type: 'number',
          unit: 'pixel'
        },
        textDecoration: {
          value: 'none',
          type: 'string'
        },
        fontFamily: {
          value: 'Akzidenz-Grotesk Pro',
          type: 'string'
        },
        fontWeight: {
          value: 900,
          type: 'number'
        },
        fontStyle: {
          value: 'normal',
          type: 'string'
        },
        fontStretch: {
          value: 'normal',
          type: 'string'
        },
        _fontStyleOld: {
          value: 'Super',
          type: 'string'
        },
        letterSpacing: {
          value: 0,
          type: 'number',
          unit: 'percent'
        },
        lineHeight: {
          value: 'normal',
          type: 'string',
          unit: 'auto'
        },
        paragraphIndent: {
          value: 0,
          type: 'number',
          unit: 'pixel'
        },
        paragraphSpacing: {
          value: 0,
          type: 'number',
          unit: 'pixel'
        },
        textCase: {
          value: 'none',
          type: 'string'
        }
      }
    }
  },
  effect: {
    'drop shadow (single)': {
      category: 'effect',
      exportKey: 'effect',
      comment: 'Drop shadow single description',
      type: {
        value: 'dropShadow',
        type: 'string'
      },
      radius: {
        value: 4,
        type: 'number',
        unit: 'pixel'
      },
      color: {
        value: 'rgba(0, 0, 0, 0.25)',
        type: 'color'
      },
      offset: {
        x: {
          value: 0,
          type: 'number',
          unit: 'pixel'
        },
        y: {
          value: 4,
          type: 'number',
          unit: 'pixel'
        }
      },
      spread: {
        value: 0,
        type: 'number',
        unit: 'pixel'
      }
    },
    'inner shadow (multiple)': {
      0: {
        type: {
          value: 'innerShadow',
          type: 'string'
        },
        radius: {
          value: 4,
          type: 'number',
          unit: 'pixel'
        },
        color: {
          value: 'rgba(0, 0, 0, 0.25)',
          type: 'color'
        },
        offset: {
          x: {
            value: 0,
            type: 'number',
            unit: 'pixel'
          },
          y: {
            value: 4,
            type: 'number',
            unit: 'pixel'
          }
        },
        spread: {
          value: 0,
          type: 'number',
          unit: 'pixel'
        }
      },
      1: {
        type: {
          value: 'innerShadow',
          type: 'string'
        },
        radius: {
          value: 1,
          type: 'number',
          unit: 'pixel'
        },
        color: {
          value: 'rgba(0, 0, 0, 1)',
          type: 'color'
        },
        offset: {
          x: {
            value: 10,
            type: 'number',
            unit: 'pixel'
          },
          y: {
            value: 100,
            type: 'number',
            unit: 'pixel'
          }
        },
        spread: {
          value: 0.5,
          type: 'number',
          unit: 'pixel'
        }
      },
      2: {
        type: {
          value: 'innerShadow',
          type: 'string'
        },
        radius: {
          value: 3,
          type: 'number',
          unit: 'pixel'
        },
        color: {
          value: 'rgba(0, 0, 0, 0.25)',
          type: 'color'
        },
        offset: {
          x: {
            value: -4,
            type: 'number',
            unit: 'pixel'
          },
          y: {
            value: 2,
            type: 'number',
            unit: 'pixel'
          }
        },
        spread: {
          value: 11,
          type: 'number',
          unit: 'pixel'
        }
      },
      category: 'effect',
      exportKey: 'effect'
    },
    'layer blur': {
      category: 'effect',
      exportKey: 'effect',
      type: {
        value: 'layerBlur',
        type: 'string'
      },
      radius: {
        value: 4,
        type: 'number',
        unit: 'pixel'
      }
    },
    'background blur': {
      category: 'effect',
      exportKey: 'effect',
      type: {
        value: 'backgroundBlur',
        type: 'string'
      },
      radius: {
        value: 4,
        type: 'number',
        unit: 'pixel'
      }
    }
  }
}
