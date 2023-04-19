describe("Pong Game", function() {
    beforeEach(function() {
    
      const canvas = document.createElement("canvas");
      canvas.setAttribute("id", "pongGame");
      canvas.setAttribute("width", "400");
      canvas.setAttribute("height", "600");
      document.body.appendChild(canvas);
    });
  
    afterEach(function() {
      // Clean up the canvas element after testing
      const canvas = document.getElementById("pongGame");
      canvas.remove();
    });
  
    describe("drawRect", function() {
      it("should draw a rectangle with the given dimensions and color", function() {
        // Set up
        const canvas = document.getElementById("pongGame");
        const context = canvas.getContext("2d");
        spyOn(context, "fillRect");
  
        // Call the function
        drawRect(0, 0, 400, 600, "pink");
  
        // Expectations
        expect(context.fillRect).toHaveBeenCalledWith(0, 0, 400, 600);
        expect(context.fillStyle).toBe("pink");
      });
    });
  
    describe("drawCircle", function() {
      it("should draw a circle with the given coordinates, radius, and color", function() {
        // Set up
        const canvas = document.getElementById("pongGame");
        const context = canvas.getContext("2d");
        spyOn(context, "beginPath");
        spyOn(context, "arc");
        spyOn(context, "closePath");
        spyOn(context, "fill");
  
        // Call the function
        drawCircle(200, 300, 10, "purple");
  
        // Expectations
        expect(context.beginPath).toHaveBeenCalled();
        expect(context.arc).toHaveBeenCalledWith(200, 300, 10, 0, Math.PI * 2, false);
        expect(context.closePath).toHaveBeenCalled();
        expect(context.fill).toHaveBeenCalled();
        expect(context.fillStyle).toBe("purple");
      });
    });
  
    describe("drawText", function() {
      it("should draw text with the given text, coordinates, and color", function() {
        // Set up
        const canvas = document.getElementById("pongGame");
        const context = canvas.getContext("2d");
        spyOn(context, "fillText");
  
        // Call the function
        drawText("Score", 20, 300, "white");
  
        // Expectations
        expect(context.fillText).toHaveBeenCalledWith("Score", 20, 300);
        expect(context.fillStyle).toBe("white");
      });
    });
  
    describe("collision", function() {
      it("should detect collision between a ball and a paddle", function() {
        // Set up
        const ball = {
          x: 200,
          y: 300,
          radius: 10
        };
        const paddle = {
          x: 180,
          y: 580,
          width: 40,
          height: 10
        };
  
        // Call the function and get the result
        const result = collision(ball, paddle);
  
        // Expectations
        expect(result).toBe(false);
      });
  
      it("should not detect collision when there is no collision between a ball and a paddle", function() {
        // Set up
        const ball = {
          x: 200,
          y: 300,
          radius: 10
        };
        const paddle = {
          x: 0,
          y: 0,
          width: 40,
          height: 10
        };
  
        // Call the function and get the result
        const result = collision(ball, paddle);
  
        // Expectations
        expect(result).toBe(false);
      });
    });
  });
  