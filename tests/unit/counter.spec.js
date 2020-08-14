import { shallowMount } from "@vue/test-utils";
import Counter from "@/components/Counter.vue";

describe("Counter.vue", () => {
	//suite para el estado inicial
	it("muestra la data correcta en el header", () => {
        // Wrapper: nueva instancia del componente (envoltorio)
		const wrapper = shallowMount(Counter, {
			propsData: {
				count: 0,
			},
        });
        // Almacena el elemento h1 encontrado  
        const header = wrapper.find("h1");
        // Ejecuta la prueba con un dato de Entrada y uno de Salida 
		expect(header.text()).toBe("0");
	});
	describe("boton incrementar", () => {
        // Variable creada en el entorno global
        let wrapper;
        // Esto se ejecuta antes que nada
        // Aprovechemos de ahorrar código y declararlo aquí
		beforeEach(() => {
			wrapper = shallowMount(Counter);
			const button = wrapper.find("#increment-button");
            button.trigger("click");
            // Luego de ejecutar evento click, ejecutamos las pruebas siguientes
		});
		it("actualiza la data del componente", () => {
            // wrapper.vm.count accede a la var de instancia del componente
			expect(wrapper.vm.count).toBe(1);
		});
		it("actualiza el texto del header", () => {
			const header = wrapper.find("h1");
			expect(header.text()).toBe("1");
		});
	});
	describe("boton resetear", () => {
        let wrapper;
        beforeEach(() => {
            wrapper = shallowMount(Counter);
            const button = wrapper.find("#reset-button");
            button.trigger("click");
        });
        it("actualiza a 0 la data", () => {
            expect(wrapper.vm.count).toBe(0);
        });
        it("actualiza el texto del header a 0", () => {
            const header = wrapper.find("h1");
            expect(header.text()).toBe("0");
        });
    });
});
