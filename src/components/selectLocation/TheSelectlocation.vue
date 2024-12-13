<template>
  <div class="location-selector">
    <!-- Dropdown Tỉnh/Thành phố -->
    <select v-model="selectedProvince" @change="fetchDistricts">
      <option value="" disabled selected hidden>Province/City</option>
      <option
        v-for="province in provinces"
        :key="province.code"
        :value="province.code"
      >
        {{ province.name }}
      </option>
    </select>

    <!-- Dropdown Quận/Huyện -->
    <select
      v-model="selectedDistrict"
      @change="fetchWards"
      :disabled="!selectedProvince"
    >
      <option value="" disabled selected hidden>District</option>
      <option
        v-for="district in districts"
        :key="district.code"
        :value="district.code"
      >
        {{ district.name }}
      </option>
    </select>

    <!-- Dropdown Phường/Xã -->
    <select v-model="selectedWard" :disabled="!selectedDistrict">
      <option value="" disabled selected hidden>Ward/Commune</option>
      <option v-for="ward in wards" :key="ward.code" :value="ward.code">
        {{ ward.name }}
      </option>
    </select>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      provinces: [], // Danh sách tỉnh/thành phố
      districts: [], // Danh sách quận/huyện
      wards: [], // Danh sách phường/xã

      selectedProvince: "", // Mã tỉnh/thành phố được chọn
      selectedDistrict: "", // Mã quận/huyện được chọn
      selectedWard: "", // Mã phường/xã được chọn

      selectedProvinceName: "",
      selectedDistrictName: "",
      selectedWardName: "",
    };
  },
  methods: {
    // Lấy danh sách tỉnh/thành phố
    async fetchProvinces() {
      try {
        const response = await axios.get(
          "https://provinces.open-api.vn/api/p/"
        );
        this.provinces = response.data;
      } catch (error) {
        console.error("Error fetching provinces:", error);
      }
    },

    // Lấy danh sách quận/huyện
    async fetchDistricts() {
      try {
        const response = await axios.get(
          `https://provinces.open-api.vn/api/p/${this.selectedProvince}?depth=2`
        );
        this.districts = response.data.districts;
        this.selectedProvinceName = response.data.name; // Tên tỉnh/thành phố
        this.wards = []; // Reset danh sách phường/xã khi chọn tỉnh mới
        this.selectedDistrict = "";
        this.selectedWard = "";
      } catch (error) {
        console.error("Error fetching districts:", error);
      }
    },

    // Lấy danh sách phường/xã
    async fetchWards() {
      try {
        const response = await axios.get(
          `https://provinces.open-api.vn/api/d/${this.selectedDistrict}?depth=2`
        );
        this.wards = response.data.wards;
        this.selectedDistrictName = response.data.name; // Tên quận/huyện
        this.selectedWard = "";
      } catch (error) {
        console.error("Error fetching wards:", error);
      }
    },
  },
  watch: {
    selectedWard(newWard) {
      // Cập nhật tên phường/xã
      const ward = this.wards.find((w) => w.code === newWard);
      this.selectedWardName = ward ? ward.name : "";
    },
  },
  mounted() {
    this.fetchProvinces(); // Gọi API lấy danh sách tỉnh/thành phố khi component được mount
  },
};
</script>
<style scoped>
.location-selector {
  display: flex;
  width: 100%;
}

select {
  width: 100%;
  height: 50px;
  border-radius: 4px;
  border: 1px solid #ccc;
  padding: 5px 10px;
  font-size: 14px;
}

select:disabled {
  background-color: #f0f0f0;
  cursor: not-allowed;
}
</style>
