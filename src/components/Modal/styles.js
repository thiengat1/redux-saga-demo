/*
 * @Description: 
 * @Author: Lewis
 * @Date: 2021-05-19 17:09:22
 * @LastEditTime: 2021-05-20 09:40:13
 * @LastEditors: Lewis
 */
const styles=(theme)=>({
    modal:{
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    //border: '2px solid #000',
    boxShadow: theme.shadows[5],
    //padding: theme.spacing(2, 4, 3),
    },
    textField:{
        width:'100%',
    },
    header:{
        backgroundColor:theme.color.primary,
        color:theme.color.textColor,
        padding: theme.spacing(2),
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    content:{
        padding: theme.spacing(2)
    },
    title:{
        fontWeight: 700,
        fontSize: 24
    },
    icon:{
        cursor: 'pointer',
        fontSize: 30
    }
})
export default styles