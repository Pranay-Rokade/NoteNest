import React from 'react';

export default function Alert(props) {

  const capitalize = (word) => {
    if (word === 'danger') {
      return "Error";
    }
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  const alertStyle = {
    base: {
      padding: '0.75rem 1.25rem',
      margin: '0.5rem 1rem',
      borderRadius: '6px',
      fontSize: '1rem',
      fontWeight: 'bold',
      backgroundColor: '#1e1e2f',
      color: '#fff',
      boxShadow: '0 0 15px rgba(125, 100, 255, 0.4)',
      borderLeft: '5px solid #7d64ff',
      transition: 'opacity 0.5s ease-in-out',
      position: 'relative',
    },
    success: {
      borderLeft: '5px solid #4caf50',
      boxShadow: '0 0 12px rgba(76, 175, 80, 0.3)',
    },
    error: {
      borderLeft: '5px solid #f44336',
      boxShadow: '0 0 12px rgba(244, 67, 54, 0.3)',
    },
    warning: {
      borderLeft: '5px solid #ff9800',
      boxShadow: '0 0 12px rgba(255, 152, 0, 0.3)',
    }
  };

  const getStyle = () => {
    if (!props.alert) return {};
    switch (props.alert.type) {
      case 'success':
        return { ...alertStyle.base, ...alertStyle.success };
      case 'danger':
        return { ...alertStyle.base, ...alertStyle.error };
      case 'warning':
        return { ...alertStyle.base, ...alertStyle.warning };
      default:
        return alertStyle.base;
    }
  };

  return (
    <div style={{ height: '60px' }}>
      {props.alert && (
        <div style={getStyle()}>
          <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
      )}
    </div>
  );
}
