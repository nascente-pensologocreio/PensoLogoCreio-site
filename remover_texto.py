from PIL import Image, ImageFilter
import numpy as np

# Abrir a imagem, agora com o caminho correto
img = Image.open("public/Mockup da Homepage.png")
arr = np.array(img)

# Detectar e substituir o texto dourado
# O texto é amarelo/dourado brilhante
r, g, b = arr[:,:,0], arr[:,:,1], arr[:,:,2]

# Máscara: pixels dourados (R alto, G moderado, B baixo)
mask = (r > 170) & (g > 130) & (b < 110)

# Clone do background: usar pixels acima do texto
result = arr.copy()
for y in np.unique(np.where(mask)[0]):
    if y > 150:  # Pegar linha de cima para clonar
        result[y, mask[y], :] = arr[y-120, mask[y], :]

# Suavizar
result_img = Image.fromarray(result.astype(np.uint8))
result_img = result_img.filter(ImageFilter.GaussianBlur(radius=3))

# Salvar com qualidade máxima
result_img.save("Mockup-da-Homepage-Limpa.png", "PNG")
print("✓ Concluído! Arquivo: Mockup-da-Homepage-Limpa.png")
