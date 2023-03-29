<template>
  <section>
    <div class="container">
      <div class="row justify-content-start mt-4">
        <div class="col-3 row justify-content-end">
          <label for="ChannelType" class="col-form-label text-end">เลือกงาน<label class="text-danger">*</label></label>
        </div>
        <div class="col-3">
          <v-select :reduce="(option) => option.id" :options="WorkOption" label="text" placeholder="เลือกงาน"
            v-model="Work"></v-select>
          <!-- <div v-if="v$.ByPoilcyNumber.ChannelType.$error" class="text-danger">
            {{ v$.ByPoilcyNumber.ChannelType.$errors[0].$message }}
          </div> -->
        </div>
        <div class="col-2 row justify-content-end">
          <label for="ChannelType" class="col-form-label text-end">สาเหตุ<label class="text-danger">*</label></label>
        </div>
        <div class="col-3">
          <v-select :reduce="(option) => option.id" :options="CauseOption" label="text" placeholder="เลือกสาเหตุ"
            v-model="Cause"></v-select>
          <!-- <div v-if="v$.ByPoilcyNumber.ChannelType.$error" class="text-danger">
            {{ v$.ByPoilcyNumber.ChannelType.$errors[0].$message }}
          </div> -->
        </div>
      </div>
      <div class="row justify-content-start">
        <div class="col-3 row justify-content-end">
          <label for="ChannelType" class="col-form-label text-end">ช่องทางการขาย<label
              class="text-danger">*</label></label>
        </div>
        <div class="col-5">
          <v-select :reduce="(option) => option.id" :options="ChannelTypeOption" label="text"
            placeholder="เลือกช่องทางการขาย" v-model="ChannelType"></v-select>
          <!-- <div v-if="v$.ByPoilcyNumber.ChannelType.$error" class="text-danger">
            {{ v$.ByPoilcyNumber.ChannelType.$errors[0].$message }}
          </div> -->
        </div>
      </div>
      <div class="row justify-content-start">
        <div class="col-6 row">
          <label for="Policy" class="col-5 col-form-label text-end">เลขกรมธรรม์<label
              class="text-danger">*</label></label>
          <div class="col-7">
            <input type="text" class="form-control" v-model="Policy">
            <!-- <div v-if="v$.ByPoilcyNumber.Policy.$error" class="text-danger">
                {{ v$.ByPoilcyNumber.Policy.$errors[0].$message }}
              </div> -->
          </div>
        </div>
        <div class="col-6 row" v-if="PolicyFlag">
          <label for="CertNo" class="col-2 col-form-label text-end">Cert No.<label class="text-danger">*</label></label>
          <div class="col-7">
            <input type="text" class="form-control" id="CertNo" v-model="CertNo">
            <!-- <div v-if="v$.ByPoilcyNumber.CertNo.$error" class="text-danger">
                {{ v$.ByPoilcyNumber.CertNo.$errors[0].$message }}
              </div> -->
          </div>
        </div>
      </div>
      <div class="row justify-content-start mt-2">

        <div class="col-6 row">
          <label for="Policy" class="col-5 col-form-label text-end">เลขที่ใบเสร็จ<label
              class="text-danger">*</label></label>
          <div class="col-7">
            <input type="text" class="form-control" v-model="BillNumber">
            <!-- <div v-if="v$.ByPoilcyNumber.Policy.$error" class="text-danger">
                {{ v$.ByPoilcyNumber.Policy.$errors[0].$message }}
              </div> -->
          </div>
        </div>
      </div>
      <div class="row justify-content-start mt-2">
        <div class="col-6 row">
          <label for="StSystemDate" class="col-5 col-form-label text-end">วันที่ใบเสร็จ<label
              class="text-danger">*</label></label>
          <div class="col-7">
            <Datepicker v-model="StSystemDate" locale="th" :format="format" autoApply v-model:value="StSystemDate">
              <template #year-overlay="{  value }">
                {{ value + 543 }}
              </template>
              <template #year="{ year }">
                {{ 'พ.ศ. ' + parseInt(year + 543) }}
              </template>
            </Datepicker>
            <!-- <div v-if="v$.StSystemDate.$error" class="text-danger">
                {{ v$.StSystemDate.$errors[0].$message }}
              </div> -->
          </div>
        </div>
      </div>
      <div class="d-grid gap-2 d-md-flex justify-content-md-center mt-2">
        <button class="btn btn-primary me-2" type="button" @click="Search()"><i class="bi bi-search"></i>ค้นหา</button>
        <button class="btn btn-warning me-2" type="button" @click="Search()"><i class="bi bi-gear"></i>ดำเนินการ</button>
        <button class="btn btn-danger" type="button" @click="ClearSearch()"><i
            class="bi bi-arrow-counterclockwise"></i>ล้างค่า</button>
      </div>
      <div>
        <table class="table table-striped" id="Table">
          <thead>
            <tr class="text-center">
              <th scope="col">เลขกรมธรรม์</th>
              <th scope="col">Cert No.</th>
              <th scope="col">ผู้เอาประกัน</th>
              <th scope="col">เลขที่ใบเสร็จ</th>
              <th scope="col">วันที่ใบเสร็จ</th>
              <th scope="col">ปี</th>
              <th scope="col">งวด</th>
              <th scope="col">เบี้ยประกัน</th>
            </tr>
          </thead>
          <tbody class="table-group-divider text-center">
            <tr v-for="(data ,index ) in DataTable" :key="index">
              <td>{{ data.Ppolicy }}</td>
              <td>{{ data.CertNo }}</td>
              <td>{{ data.Customer }}</td>
              <td>{{ data.BillNo }}</td>
              <td>{{ data.BillDt }}</td>
              <td>{{ data.YR }}</td>
              <td>{{ data.LT }}</td>
              <td>{{ data.SumPremium }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div v-if="Loading">
      <LoadingBs5></LoadingBs5>
    </div>
  </section>

</template>

<script lang="ts">
  import {
    defineComponent
  } from 'vue'
  import Datepicker from '@vuepic/vue-datepicker';
  import '@vuepic/vue-datepicker/dist/main.css';
  import LoadingBs5 from '@/components/frontend/LoadingBs5.vue';
  import http from '@/services/AuthService'
  import Swal from 'sweetalert2/src/sweetalert2.js'
  import useValidate from '@vuelidate/core'
  import {
    required,
    helpers
  } from '@vuelidate/validators'

  interface MyComponentMethods {
    GetChannelTypeOption: () => any
    GetWorkStatusOption(): () => any
  }
  export default defineComponent({
    setup() {
      // In case of a range picker, you'll receive [Date, Date]
      const format = (date: any) => {
        return date.toLocaleDateString('th-TH')
      }

      return {
        format,

      }
    },
    data() {
      return {
        v$: useValidate(),
        Work: null as string | null,
        WorkOption: [] as any,
        Cause: null as string | null,
        CauseOption: [] as any,
        ChannelType: null as string | null,
        ChannelTypeOption: [] as any,
        Policy: null as string | null,
        PolicyOption: [] as any,
        StSystemDate: null as string | null,
        PolicyFlag: false,
        DataTable: [] as any,
        BillNumber: null as string | null,
        CertNo: null as string | null,
        TypeOfChannelType: null as string | null
      };
    },
    created() {
      this.GetChannelTypeOption();
      this.GetWorkStatusOption();
      this.GetCauseOption();
    },
    mounted: function () {

    },
    computed: {

    },
    watch: {
      'ChannelType'(value) {
        console.log('ChannelType', value)
        if (value != null && value != '') {
          // this.GetPolicyOption();
          this.CheckTypePolicy(value);
        }
      }
    },
    methods: {
      CheckTypePolicy(value: string) {
        let selectedCh = this.ChannelTypeOption.filter(function (ele: any) {
          return ele.id == value
        })
        let flgType = selectedCh[0].flag
        if (flgType == 'P') {
          this.PolicyFlag = false
        } else if (flgType == 'C') {
          this.PolicyFlag = true
        }
        this.TypeOfChannelType = flgType
      },
      async GetChannelTypeOption() {
        try {
          const response = await http.get('AutbChannel/GetAutbChannel', {});
          if (response.status == 200) {
            response.data.forEach((ele: any) => {
              let ddl = {
                id: '',
                text: '',
                flag: ''
              };
              ddl.id = ele.CHANNEL_TYPE;
              ddl.text = ele.DESCRIPTION;  
              ddl.flag = ele.POLICY_TYPE
              this.ChannelTypeOption.push(ddl);
            });
            this.ChannelType = this.ChannelTypeOption[0].id

          }
        } catch (error) {
          console.log(error);
        }
      },
      async GetWorkStatusOption() {
        try {
          const response = await http.get('Master/GetWorkStatus', {});
          if (response.status == 200) {
            response.data.forEach((ele: any) => {
              let ddl = {
                id: '',
                text: ''
              };
              ddl.id = ele.Id;
              ddl.text = ele.Text;
              this.WorkOption.push(ddl);
            });
          }
        } catch (error) {
          console.log(error);
        }
      },
      async GetCauseOption() {
        try {
          const response = await http.get('Master/GetReasonCode', {});
          if (response.status == 200) {
            this.CauseOption = [{id: '' , text:'ทั้งหมด'}]
            response.data.forEach((ele: any) => {
              let ddl = {
                id: '',
                text: ''
              };
              ddl.id = ele.TCT_CODE2;
              ddl.text = ele.TCT_DESC;
              this.CauseOption.push(ddl);
            });
            this.Cause = this.CauseOption[0].id
          }
        } catch (error) {
          console.log(error);
        }
      },
      async Search(){
         try {
          const response = await http.post('CancelBill/GetDetailCancelBillV3', {
            "Policy": this.Policy == null ? '' : this.Policy,
            "BillNo": this.BillNumber == null ? '' : this.BillNumber,
            "ChannelType": this.ChannelType == null ? '' : this.ChannelType,
            "TypeOfChannel": this.TypeOfChannelType == null ? '' : this.TypeOfChannelType,
            "Holding": this.CertNo == null ? '' : this.CertNo
          });
          if (response.status == 200) {
            this.DataTable = response.data
            console.log(this.DataTable)
          }
        } catch (error) {
          console.log(error);
        }
      }
    },
    validations() {
      return {

      }
    }
  })
</script>