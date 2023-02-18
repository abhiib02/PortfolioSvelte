<script>

export let Projects;
export let limit;
let activeProject = 0;

Projects = Projects.slice(0, limit);
let animclass ="animate__zoomInDown";


function increment(){
    animclass = "";
    setTimeout(()=>{
        animclass = "animate__fadeInRight";
    },0)
    if(activeProject >= Projects.length-1) {activeProject = 0; return;}
    activeProject+= 1;
    return;
}
function decrement(){
    animclass = "";
    setTimeout(()=>{
        animclass = "animate__fadeInLeft";
    },0)
    if(activeProject <= 0) {activeProject = Projects.length-1; return;}
    
    activeProject = activeProject - 1;
    return;
}
function dots(index){
    activeProject = index;
    animclass = "";
    setTimeout(()=>{
        animclass = "animate__zoomInDown";
    },0)
    
}
</script>
<div class="wrapper">
    <div class="project_card animate__animated {animclass}">
        <div class="project_image" style="--url:url({"images/"+Projects[activeProject].Image})" alt=""></div>
        <div class="project_data white-text-color">
            <div>
                {#each Projects[activeProject].Tech as tech}
                <p>{tech}</p>
                {/each}
                
            </div>
            <p class="project_name">{Projects[activeProject].Name}</p>
        </div>
    </div>
    <div class="dotscontainer">
        {#each Projects as Project,index}
        <button class="dots {activeProject === index ? 'active':''}" href="#fck" on:click={()=>dots(index)}></button>
        {/each}
    </div>
    <!--<img class="animate__animated {animclass}" src={Projects[activeProject].image} alt="">-->
    <button on:click={increment} class="white-text-color next"><i class="ri-arrow-right-circle-fill"></i></button>
    <button on:click={decrement} class="white-text-color prev"><i class="ri-arrow-left-circle-fill"></i></button>
</div>
<style>
    .wrapper{
        position: relative;
    }
    .project_card{
        position: relative;
        width:289px;
        height: 346px;
        outline: 1px solid var(--maincolor);
        border-radius: 10px;
    }
    .next,.prev{
        position: absolute;
        bottom: -4rem;
        font-size: 2rem;
        background:none;
        border: none;
    }
    .next{
        right:-2rem;
    }
    .prev{
        left:-2rem;
    }
    .project_image{
        position: absolute;
        left: 50%;
        transform: translate(-50%,-20%);
        width: 275px;
        height: 304px;
        border-radius: 10px;
        background:var(--url);
        background-repeat: repeat;
        background-size: 170%;
        background-position: center;
        clip-path: polygon(0 1%, 100% 0, 100% 100%, 0 69%);
    }
    .project_name{
        font-size: 1.5rem;
    }
    .project_data{
        position: absolute;
        width:100%;
        text-transform: uppercase;
        text-align: left;
        bottom: 1rem;
        margin: 0 2rem;
    }
    .dotscontainer{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        min-height: 30px;
        gap:.6rem;
        position: absolute;
        width: 100%;
        padding: 0 4rem;
        bottom: -3.4rem;
        flex-wrap: wrap;
    }
    .dots{
        width:10px;
        height:10px;
        background: #333;
        border-radius: 50%;
        list-style: none;
        border: none;
    }
    .active{
        background: white;
    }
    
</style>