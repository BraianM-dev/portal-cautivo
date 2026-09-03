# Portal Cautivo Educativo

**Simulación controlada de phishing y ransomware con ESP32**  
Ciencias de la Computación · 8°–9° EBI · Alfabetización y Ciudadanía Digital  
Adaptable a Educación Media Superior (EMS)

**Autor:** Braian Mosqueira  
**Creación:** junio–julio 2026  
**Licencia:** [CC BY 4.0](LICENSE)  
**Asistencia de IA:** DeepSeek (declaración completa en el sitio)

---

## ¿Qué es?

Un recurso educativo que usa una placa **ESP32-C3 Super Mini** (~$300 UYU) para crear un punto de acceso Wi-Fi con portal cautivo. Los estudiantes se conectan, recorren un “Portal Administrativo Docente” simulado, “caen” en un phishing de demostración y ven una animación de ransomware, seguida de una lección de ciberseguridad.

**No se guardan contraseñas, no se cifra nada real y no se instala malware.**

## Contenido del repositorio

```
portal-cautivo/
├── index.html              # Portada
├── como-funciona.html      # Flujo de la simulación + capturas
├── materiales.html         # Hardware, instalación y código
├── guia-docente.html       # Secuencia, DUA, evaluación
├── recursos-docentes.html  # Hub (legal, IA, licencia)
├── aviso-legal.html
├── declaracion-ia.html
├── licencia.html
├── assets/
│   ├── style.css
│   ├── a11y.js             # Panel de accesibilidad
│   ├── ESP32-CIBERSEGURIDAD-MALWARE.py
│   └── *.jpg               # Capturas
├── LICENSE
└── README.md
```

## Sitio web

Abrí `index.html` en un navegador o publicá la carpeta en **GitHub Pages**.

### Accesibilidad

Panel (♿) con:
- Tema claro / oscuro / alto contraste  
- Tamaño de texto  
- Fuente para dislexia  
- Reducción de movimiento  

Preferencias guardadas en el navegador.

## Cómo usar el ESP32 (resumen)

1. Flashear **MicroPython** para ESP32-C3.
2. Cargar `assets/ESP32-CIBERSEGURIDAD-MALWARE.py` como `main.py`.
3. Configurar al inicio del archivo:

```python
NODE_ROLE = 'master'
MASTER_ALSO_AP = True
CHANNEL = 6
SSID_BASE = "DGES_Red_Docentes"
```

4. Conectar dispositivos a la red del ESP32 y abrir `http://192.168.4.1/admin` desde el rol docente.

Detalle completo: página **Materiales y código** del sitio.

## Aviso importante

Uso **exclusivamente educativo y autorizado**.  
Antes de una demostración en aula: autorización institucional, entorno controlado e informar a los estudiantes que se trata de una simulación.  
Ver [aviso-legal.html](aviso-legal.html).

## Publicación en GitHub Pages

1. Creá un repositorio (por ejemplo `portal-cautivo-educativo`).
2. Subí el contenido de esta carpeta a la raíz (o a `/docs`).
3. En *Settings → Pages*, elegí la rama `main` y la carpeta correspondiente.
4. El sitio quedará en `https://<usuario>.github.io/<repo>/`.

Para embeber en CREA/Schoology podés usar `?embed=1` en la URL (oculta header y footer).

## Atribución

```
“Portal Cautivo Educativo — Simulación de Phishing y Ransomware con ESP32”
por Braian Mosqueira, con asistencia de DeepSeek, bajo licencia CC BY 4.0.
https://creativecommons.org/licenses/by/4.0/
```

---

*La mejor defensa es la educación.*
