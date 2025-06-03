<template>
    <div>
        <h2>Employees</h2>
        <ul>
            <li v-for="employee in employees" :key="employee.id">
                {{ employee.name }} - {{ employee.position }} - ${{ employee.salary }}
                <button @click="deleteEmployee(employee.id)">Delete</button>
            </li>
        </ul>

        <h3>Add Employee</h3>
        <form @submit.prevent="addEmployee">
            <input v-model="newEmployee.name" placeholder="Name" required />
            <input v-model="newEmployee.position" placeholder="Position" required />
            <input v-model.number="newEmployee.salary" placeholder="Salary" type="number" min="0" required />
            <button type="submit">Add</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      employees: [],
      newEmployee: {
        name: '',
        position: '',
        salary: null,
      },
    };
  },
  methods: {
    async fetchEmployees() {
      try {
        const response = await axios.get('/employees');
        this.employees = response.data;
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    },
    async addEmployee() {
      try {
        await axios.post('/employees', this.newEmployee);
        this.newEmployee = { name: '', position: '', salary: null };
        this.fetchEmployees();
      } catch (error) {
        console.error('Error adding employee:', error);
      }
    },
    async deleteEmployee(id) {
      try {
        await axios.delete(`/employees/${id}`);
        this.fetchEmployees();
      } catch (error) {
        console.error('Error deleting employee:', error);
      }
    },
  },
  mounted() {
    this.fetchEmployees();
  },
};
</script>
