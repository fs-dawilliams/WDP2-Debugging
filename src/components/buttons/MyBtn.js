import React from 'react';
import styled from 'styled-components';

//Dummy Component
const MyBtn = props => {  
  return (
      <Button>
        {props.myBtn}
      </Button>
  )
};
export default MyBtn;


const theme = {
  gray: {
    default: "transparent",
    hover: "#CF9FFF",
  },
  pink: {
    default: "#e91e63",
    hover: "#ad1457"
  }
};

const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: rgb(163,173,194);
  padding: 10px 20px;
  border: none;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
    outline: 0;
    color: black;
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

Button.defaultProps = {
  theme: "gray"
};

// border-radius: 3px;
// box-shadow: 0px 1px 1px lightgray;
// transition: ease background-color 250ms;

// const Button = styled.button`
//   color: palevioletred;
//   backgroundColor: black;
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid palevioletred;
//   border-radius: 15px;
// `;

// const CardButton = styled(Button)`
//   color: tomato;
//   border-color: tomato;
// `;
// // const styles2 = createUseStyles({
//   // redBtn: {
//     // background: {
//     //   color: 'white',
//     //   image: 'url("https://ibb.co/BcLkZxh")',
//     //   repeat: 'no-repeat',
//     //   position: 'contain'
//     // },
//     // '&:before': {
//     //   content: '"icon"'
//     // },
//     // '&:hover': {
//     //   textDecoration: 'underline',
//     // }  
//     // backgroundColor: 'red'    
//   //}
//   // hoverText: {
//   //   color: #000;
//   //   ':hover' {
//   //     color: #ed1212;
//   //     cursor: pointer;
//   //   }
//   // }
// // });

// const HoverText = styled.p`
// 	color: #000;
// 	:hover {
// 		color: #ed1212;
// 		cursor: pointer;
// 	}
// `

  // button: {
    //extend: font,
    // border: 'none',
    // margin: [5, 10],
    // transition: ['background', 'color', 'font-size'],
    // transitionDuration: 300,
    // background: {
    //   color: 'white',
    //   image: 'url("/some/url/image.png")',
    //   repeat: 'no-repeat',
    //   position: 'contain'
    // },
    // '&:before': {
    //   content: '"icon"'
    // }
  //   height: '5%',
  //   color: 'rgb(163,173,194)',
  //   fontSize: '1.2em',
  //   fontWeight: 'bold',
  //   cursor: 'pointer',
  //   borderRadius: '10%' 
  // },
  // redButton: {
  //   extend: 'button',
  //   background: 'linear-gradient(to right, red 0%, green 100%)',
  //   fallbacks: {
  //     background: 'red'
  //   },
  //   '&:hover': {
  //     border: [
  //       [50, 'solid', 'blue']
  //     ],
  //     boxShadow: [
  //       [0, 0, 0, 10, 'blue'],
  //       [0, 0, 0, 15, 'green']
  //     ],
  //     '& span': {
  //       color: 'red'
  //     }
  //   }
  // },
  // '@media (min-width: 1024px)': {
  //   button: {
  //     fontSize: 16
  //   },
  //   '&:hover': {
  //     border: [
  //       [50, 'solid', 'blue']
  //     ],
  //   }
  // }
//}

 // background: {
    //   color: 'white',
    //   image: 'url("https://ibb.co/BcLkZxh")',
    //   repeat: 'no-repeat',
    //   position: 'contain'
    // },
    // '&:before': {
    //   content: '"icon"'
    // },
    // '&:hover': {
    //   textDecoration: 'underline',
    // } 