<template>
  <div class="app">
      <el-container>
       <el-header style="height:48px;   padding: 0px">
         <el-row>
          <el-col style="border-bottom: 1px solid #dddddd;">
             <i class="icon icon_back" style="margin-top: 10px;
            float: left;"></i>
            <h2 style=" float: left;
            font-size: 1.5rem;
            color: #333;
            width: 16.66667rem;
            margin-top: 10px;
            text-align: center;
            vertical-align: top;
            margin-left: 60px;">联系客服</h2>
          </el-col>
        </el-row>
      </el-header>
        <el-main style="padding: 0; overflow: hidden;">
            <div class="Mine">
                <img src="../images/service-tel.png" alt="">
                
                <el-col style="position: relative;">
                    <div>
                        <p class="oneP">021-38473528</p>
                       <p class="towP">周一至周六 9:00-18:00 仅收市话费</p>
                    </div>

               </el-col>
       
            </div>
             <div class="Mine">
                 <img src="../images/service-email.png" alt="">
                <el-col style="position: relative;">
                <div>
                  <p class="oneP">客服邮箱</p>
                  <p class="towP">service@xidibuy.com</p>
                </div>
               </el-col>
            </div>
             <div class="Mine">
                 <img src="../images/contactCustomer.png" alt="">
                <el-col style="position: relative;">
                  <div >
                   <p class="oneP">喜地在线客服</p>
                   <p class="towP">周一至周六 9:00-18:00</p>
                  </div>
               </el-col>
            </div>
        </el-main>
      </el-container>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>

      .top{
        width: 414px;
        height: 48px;
        border-bottom: 1px solid #dddddd;
      }
        
    .Mine{
        padding: 25px 15px;
        height: 414px;
        height: 100px;
        border-bottom: 1px solid #dddddd;
        
        
        img{
            width: 66px;
            height: 66px;
            float: left;
        }
        .oneP{
            font-size: 18px;
            color: #333;
            position: absolute;
            top: -50px;
            left: 80px;
        }
         .towP{
            font-size: 14px;
            color: #333;
            position: absolute;
            top: -25px;
            left: 80px;
        }
    }

  
</style>