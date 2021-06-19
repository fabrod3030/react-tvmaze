import { Box, IconButton } from '@material-ui/core'
import React from 'react'

import useStyles from './styles'

const InputWithButton = (props) => {

    const classes = useStyles()
    const { action, value, updateValue, icon, placeholder, label, type, disabled } = props

    return (
        <Box className={classes.inputContainer}>
            {label && <label>{label}</label>}
            <Box className={classes.inputSection}>
                <input
                    type={type? type: 'text'}
                    value = {value}
                    placeholder={placeholder}
                    onChange={(e) => updateValue(e.target.value)}
                    disabled={disabled? disabled: false}
                />
                {action && icon &&
                    <IconButton 
                            onClick={() => action()}
                            className={classes.icon}
                        >
                        {icon}
                    </IconButton>
                }
            </Box>
          </Box>
    )
}

export default InputWithButton
