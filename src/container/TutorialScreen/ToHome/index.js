import React,{Component} from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import Text from '../../../components/UiText';
import './styles.scss'
import BottomBack from './bottomBack';
import {Motion, spring} from 'react-motion';

const anim_time = { stiffness: 170, damping: 26 }

class ToHome extends Component{
    state = {
        x:30, y:0, z:0, p:6,
        show_bar : false
    }

    animate(){
        
        this.setState({
            x:10, y:100, z:6, p:2,vr_line_pos:45,txt_pos:10,
            show_bar : !this.state.show_bar
        })
    }

    animateInfo=()=>{
        this.setState({
            vr_line_pos : 90,
            txt_pos: 50
        })
    }


    render(){
        let {x, y, z, p, vr_line_pos, txt_pos} = this.state
        console.log(this)
        return(
            <Motion defaultStyle={{x, y, z, p,vr_line_pos,txt_pos}} style={{x: spring(x,...anim_time),
                y: spring(y,...anim_time),z: spring(z,...anim_time),
                p:spring(p,...anim_time),vr_line_pos: spring(vr_line_pos,...anim_time),
                txt_pos:spring(txt_pos,...anim_time)}}>
                {   val=>
                <Grid className="toHome">
                    <Row style={{height:val.x+'vh'}}>
                        <Col md={12} sm={12} xs={12}>
                            <Text color="black" position="absolute"  top={val.p} size={20}
                                text="Hallo Christian! Du bist jetzt startklar" />
                        </Col>
                    </Row>
                    <BottomBack style={{height: val.y+'vh',top: val.z+'em'}} onClick={()=>this.animate()} animateInfo={()=>this.animateInfo()}
                    showBar={this.state.show_bar}
                        animate={{
                            line_left:val.vr_line_pos,
                            txt_left:val.txt_pos
                        }} />

  {/* {value => <div>{value.x}</div>} */}
                </Grid>}
            </Motion>
          
        )
    }

}

export default ToHome;